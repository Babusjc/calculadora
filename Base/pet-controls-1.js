//-------------------------------------------------------------------------------------//

"use strict"

//-------------------------------------------------------------------------------------//
// Controles                                                                           //

    function CriarDiv(nome, pai, corFundo, texto, clique)
    {
        let div = document.createElement("div");

        div.style.backgroundColor = corFundo;
        div.style.position        = "absolute";
        div.style.overflow        = "hidden";
        div.onclick               = clique;
        div.Nome                  = nome;
        div.CorOriginal           = corFundo;
        div.Texto                 = CriarTxt(nome + " Txt", div, texto);

        if (clique === undefined) alert(nome + " - clique 'undefined'");

        CriarGrid(div);

        div.Pai = pai;
        pai.appendChild(div);
        return div;
    }
    //----------------------------------------------------------------------

    function CriarTxt(nome, pai, texto)
    {
        let txt = document.createElement("div");

        txt.innerHTML        = (texto == undefined) ? "" : texto;
        txt.style.position   = "absolute";
        txt.style.top        = "50%";
        txt.style.left       = "50%";
        txt.style.transform  = "translate(-50%, -50%)";
        txt.style.whiteSpace = "nowrap";
        txt.Nome             = nome;

        pai.appendChild(txt);
        return txt;
    }
    //----------------------------------------------------------------------

    function CriarLbl(nome, pai, corFundo, texto, alinhamento, margem, clique)
    {
        let lbl = CriarDiv(nome, pai, corFundo, texto, clique);

        if (alinhamento == "left")  SetDivTextLeft (lbl , margem);
        if (alinhamento == "right") SetDivTextRight(lbl , margem);

        return lbl;
    }
    //----------------------------------------------------------------------

    function CriarIco(nome, pai, arquivo, corFundo, porcVert, clique)
    {
        let ico = CriarDiv(nome, pai, corFundo, "", clique);

        ico.style.overflow = "visible";

        ico.Imagem = CriarImg(nome + " Img", ico, arquivo, corFundo, null);
        ico.Imagem.style.position  = "absolute";
        ico.Imagem.style.top       = "50%";
        ico.Imagem.style.left      = "50%";
        ico.Imagem.style.height    = porcVert + "%";  // Mantém a proporção se definir só um
        ico.Imagem.style.transform = "translate(-50%, -50%)";

        return ico;  // ico mantém sempre a proporção
    }
    //----------------------------------------------------------------------

    function CriarImg(nome, pai, arquivo, corFundo, clique)
    {
        let img = document.createElement("img");

        img.style.backgroundColor = corFundo;
        img.style.position        = "absolute";
        img.src                   = arquivo;
        img.onclick               = clique;
        img.Nome                  = nome;

        if (clique === undefined) alert(nome + " - clique 'undefined'");

        CriarGrid(img);

        img.Pai = pai;
        pai.appendChild(img);
        return img;  // img distorce para ocupar todo o tamanho
    }
//-------------------------------------------------------------------------------------//