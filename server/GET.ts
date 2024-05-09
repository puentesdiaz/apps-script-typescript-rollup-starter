function getJSON (): string {
  const obj_json = {
    uno: 1,
    dos: 2
  }

  return JSON.stringify(obj_json)
}

export { getJSON }
