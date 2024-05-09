function getJSON (): string {
  const obj_json = {
    uno: Math.random(),
    dos: Math.random()
  }

  return JSON.stringify(obj_json)
}

export { getJSON }
