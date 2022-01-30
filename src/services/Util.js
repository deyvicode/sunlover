const formatDate = (date) => new Intl.DateTimeFormat('es', {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    hour12: false
}).format(date)

const sortByName = (array) => {
    return array.sort((a, b) => a.name.localeCompare(b.name))
}

const findItem = (array, id) => {
    return array.find(item => item.id === id)
}

export { formatDate, sortByName, findItem }