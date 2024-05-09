const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias]

function exibeNomeenota(aluno){
   if (listaDeAlunosEMedias[0].includes(aluno)){

        const [alunos, medias] = listaDeAlunosEMedias

        const indice = alunos.indexOf(aluno)

        const mediaAluno = medias[indice]

        console.log(`${aluno} tem a média ${mediaAluno}`)

    }else{
        console.log("Aluno(a) não encontrado!")
    }
}

exibirNomeeNota("João")
exibirNomeeNota("Juliana")
exibirNomeeNota("Ana")
exibirNomeeNota("Caio")