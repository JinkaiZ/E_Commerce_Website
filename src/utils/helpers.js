export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-NZ', {
        style: 'currency',
        currency: 'NZD'
    }).format(number / 100)
    return newNumber
}

export const getUniqueValues = () => { }
