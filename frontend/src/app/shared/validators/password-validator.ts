import { AbstractControl } from '@angular/forms';

export const matchValidator = (g: AbstractControl) => {
    const p1 = g.get('password');
    const p2 = g.get('confirmPassword');

    // 1. Si alguno no existe, no validamos aún
    if (!p1 || !p2) return null;

    // 2. Si ambos campos tienen texto pero no son iguales
    if (p1.value && p2.value && p1.value !== p2.value) {
        // Le seteamos el error 'mustMatch' directamente al control de confirmar contraseña
        p2.setErrors({ ...p2.errors, mustMatch: true });
        return { mustMatch: true };
    }

    // 3. Si ya coinciden, limpiamos ESPECÍFICAMENTE el error 'mustMatch' sin borrar otros (como minlength)
    if (p2.hasError('mustMatch')) {
        const errors = { ...p2.errors };
        delete errors['mustMatch'];
        // Si quedan más errores (ej: minlength), los dejamos; si no, pasamos null
        p2.setErrors(Object.keys(errors).length ? errors : null);
    }

    return null;
};