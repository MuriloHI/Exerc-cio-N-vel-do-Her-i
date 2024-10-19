let quantidadeExperiencia = 9003;
let nomeHeroi = "Lucas";

for (let i=0; i<1; i++)
{
    if (quantidadeExperiencia > 0)
    {
        console.log("Verificando XP...")
        console.log("XP Válida!")
    }
    else
    {
        console.log("Verificando XP...")
        console.log("XP Inválida. Error 123. Reinicie seu jogo")
    }
}

if (quantidadeExperiencia < 1000 && quantidadeExperiencia > 0)
{
    console.log("O Herói de nome "+nomeHeroi+" está no nível de FERRO")
}
else if (quantidadeExperiencia >=1001 && quantidadeExperiencia <= 2000)
{
    console.log("O Herói de nome "+nomeHeroi+" está no nível de BRONZE")
}
else if (quantidadeExperiencia >=2001 && quantidadeExperiencia <= 5000)
{
    console.log("O Herói de nome "+nomeHeroi+" está no nível de PRATA")
}
else if (quantidadeExperiencia >=5001 && quantidadeExperiencia <= 7000)
{
    console.log("O Herói de nome "+nomeHeroi+" está no nível de OURO")
}
else if (quantidadeExperiencia >=7001 && quantidadeExperiencia <= 8000)
{
    console.log("O Herói de nome "+nomeHeroi+" está no nível de PLATINA")
}
else if (quantidadeExperiencia >=8001 && quantidadeExperiencia <= 9000)
{
    console.log("O Herói de nome "+nomeHeroi+" está no nível de ASCENDENTE")
}
else if (quantidadeExperiencia >=9001 && quantidadeExperiencia <= 10000)
{
    console.log("O Herói de nome "+nomeHeroi+" está no nível de IMORTAL")
}
else if (quantidadeExperiencia >= 10001)
{
    console.log("O Herói de nome "+nomeHeroi+" está no nível de RADIANTE")
}