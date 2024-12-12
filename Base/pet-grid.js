//-------------------------------------------------------------------------------------//

"use strict"

//-------------------------------------------------------------------------------------//
// Grid                                                                                //

    function CriarGrid(div)
    {
        div.Margem  = 0;
        div.Linhas  = 1;
        div.Colunas = 1;
        div.Cel     = [];

        div.SetGrid = function(linhas, colunas, margem)
        {
            if (margem == undefined) margem = 0;

            div.Linhas  = linhas;
            div.Colunas = colunas;
            div.Margem  = margem;
        }

        div.PosFilho = function(obj, linha, coluna, numLinhas, numColunas, off)
        {
            if (off == undefined) off = 0;

            let margem  = div.Margem;
            let linhas  = div.Linhas;
            let colunas = div.Colunas;

            let ratioH = div.offsetHeight / UY;
            let ratioW = div.offsetWidth  / UX;

            let celAltura  = (ratioH - 2*margem) / linhas;
            let celLargura = (ratioW - 2*margem) / colunas;

            let top  = div.Margem + (linha-1)  * celAltura  + off;
            let left = div.Margem + (coluna-1) * celLargura + off;

            let altura  = numLinhas  * celAltura  - 2 * off;
            let largura = numColunas * celLargura - 2 * off;

            Pos(obj, top, left, altura, largura);
        }

        div.Pos = function(linha, coluna, numLinhas, numColunas, off)
        {
            div.Pai.PosFilho(div, linha, coluna, numLinhas, numColunas, off);
        }

        div.GerarCelulas = function(opacidade, mostrarCoord)
        {
            while (div.Cel.length > 0)
            {
                let c = div.Cel[0];
                c.remove();
                div.Cel.shift();
            }

            for (let lin=1 ; lin<=div.Linhas  ; lin++)
            for (let col=1 ; col<=div.Colunas ; col++)
            {
                let nome    = "Cel " + lin + "," + col;
                let coord   = (mostrarCoord ? lin + "," + col : "");
                let cel     = CriarDiv(nome, div, mdWhite, coord, null);
                cel.Linha   = lin;
                cel.Coluna  = col;
                cel.Posicao = (lin-1)*div.Colunas + col;
                S_TextColor(mdBlack, cel);
                S_ZIndex(100, cel);
                S_Opacity(opacidade, cel);
                S_PointerNone(cel);
                div.Cel.push(cel);
            }
        }

        div.ExibirGrid = function(opacidade, mostrarCoord)
        {
            div.GerarCelulas(opacidade, mostrarCoord);

            if (div.Cel.length > 0)
            {
                for (let lin=1 ; lin<=div.Linhas  ; lin++)
                for (let col=1 ; col<=div.Colunas ; col++)
                {
                    let index = (lin-1) * div.Colunas + (col-1);
                    let cel = div.Cel[index];

                    div.PosFilho(cel, lin, col, 1, 1, 0);
                    S_Radius(5, cel);
                    S_Border(1, "solid", mdBlack, cel);
                }
            }
        }
    }
//-------------------------------------------------------------------------------------//