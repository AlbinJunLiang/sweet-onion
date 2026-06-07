/**
 * El archivo completion.js centraliza todos los servicios de completion en una 
 * sola función.
 */
import { cerebrasCompletion } from "./services/cerebras.completion.js";
import { googleCompletion } from "./services/google.completion.js";
import { groqCompletion } from "./services/groq-completion.js";
import { huggingFaceCompletion } from "./services/hugging-face.completion.js";
import { nvidiaCompletion } from "./services/nvidia-completion.js";
import { openRouterCompletion } from "./services/open-router.completion.js";
import { createChatInstruction } from "./instructions/chat-instruction.js";

/**
 * Modelos disponibles 
 */
const DEFAULT_MODELS = {
    openrouter: "google/gemma-3-4b-it",
    groq: "llama-3.3-70b-versatile",
    google: "gemini-2.5-flash",
    nvidia: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
    huggingface: "openai/gpt-oss-120b:nscale",
    cerebras: "gpt-oss-120b"
};

/**
 * Funciones para completion según el proveedor
 */
const PROVIDERS = {
    openrouter: openRouterCompletion,
    groq: groqCompletion,
    google: googleCompletion,
    nvidia: nvidiaCompletion,
    huggingface: huggingFaceCompletion,
    cerebras: cerebrasCompletion,
};


/**
 * Permite seleccionar la función o estrategia de completion según 
 * el proveedor.
 * 
 * @param {*} provider 
 * @returns {string} Retorna el resultado o respuesta de la IA en un string.
 */

const getProvider = (provider) => {
    const completion = PROVIDERS[provider];
    if (!completion) {
        throw new Error("Provider not supported.");
    }
    return completion;
};


/**
 * Genera una respuesta utilizando el provider de IA seleccionado.
 *
 * Esta función puede utilizarse tanto para:
 * - Mantener conversaciones persistentes.
 * - Crear conversaciones temporales sin almacenamiento.
 *
 * Construye automáticamente la instrucción del sistema según el idioma,
 * selecciona el modelo por defecto del provider si no se especifica uno
 * y ejecuta la completion.
 *
 * @async
 * @function generateCompletion
 *
 * @param {Object} params - Parámetros de generación.
 * @param {string} params.content - Mensaje o prompt enviado por el usuario.
 * @param {boolean} [params.system=true] - Indica si debe incluir instrucciones de sistema.
 * @param {string} [params.context=''] - Contexto o historial previo de conversación.
 * @param {string} [params.model] - Modelo específico a utilizar.
 * @param {string} [params.language='ESPAÑOL'] - Idioma utilizado para generar instrucciones.
 * @param {string} params.provider - Provider de IA a utilizar.
 * @param {boolean} [params.isJson=false] - Define si la respuesta debe generarse en formato JSON.
 *
 * @returns {Promise<string|Object>}
 * Retorna la respuesta generada por el provider.
 *
 * @example
 * const response = await generateCompletion({
 *   content: 'Explícame qué es Node.js',
 *   provider: 'openai'
 * });
 *
 * console.log(response);
 */
export const generateCompletion = async ({
    content = '',
    instruction = '',
    context = '',
    system = true,
    model,
    isJson = false,
    provider
}) => {

    const completion = getProvider(provider);
    const activeModel = model || DEFAULT_MODELS[provider];

    return await completion({
        content,
        instruction,
        context,
        system,
        model: activeModel,
        isJson
    });
};
