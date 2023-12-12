export default function addTemplates(templates, elementRef, data) {
    const newTemplates = templates(data)
    elementRef.innerHTML = newTemplates
}