const formatDate = (date) => new Intl.DateTimeFormat('es', {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    hour12: false
}).format(date)

export { formatDate }