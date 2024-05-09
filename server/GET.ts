// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doGet () {
  const contenido: string = getJSON()
  return ContentService.createTextOutput(contenido).setMimeType(
    ContentService.MimeType.JSON
  )
}

function getJSON (): string {
  const obj_json = {
    uno: 1,
    dos: 2
  }

  return JSON.stringify(obj_json)
}
