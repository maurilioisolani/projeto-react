
function gerarNumeroNaoContido (min, max, arrays) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return  arrays.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, arrays) :
            aleatorio
}

function gerarNumeros (qtde) {
    const numeros = Array(qtde)
                    .fill(0)
                    .reduce((nums) => {
                    const novoNumero = gerarNumeroNaoContido(1,60, nums)
                    console.log([...nums, novoNumero])
                    return [...nums, novoNumero]
                    },[])

                    .sort((n1,n2) => n1 -n2)

                    return numeros
}

console.log(gerarNumeros(7))