export function mappingModelResponse(model) {
    return {
        id: model._id,
        provider: model.provider,
        model: model.model,
        status: model.status,
        defect: model.defect
    }
}