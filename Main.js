//-------------------------------------------------------------------------------------//

"use strict"

//-------------------------------------------------------------------------------------//
// Setup                                                                               //
//-------------------------------------------------------------------------------------//

//--------------------------------------
// Cores   -   https://www.rgbtohex.net/

    let corBody = mdBlack;
    let corPage = mdBlack;
    let corMain = mdGray[2];

    let corComidas = mdRed[4];
    let corBebidas = mdGreen[4];
    let corDoces   = mdBlue[4];
    let corOutros  = mdOrange[4];

    let corZerar      = mdRed[4];
    let corFullscreen = mdGray[4];
    let corTotal      = mdYellow[5];

//--------------------------------------
// Body

    document.title = "Festa Junina";
    document.onkeydown = KeyDown;

    S_Background(corBody, document.body);

//--------------------------------------
// Page & Main

    let Page = CriarDiv("Page", document.body, corPage, "", null);
    let Main = CriarDiv("Main", Page         , corMain, "", null);

    Page.style.touchAction = "manipulation";
    Page.style.fontFamily  = "Arial, Helvetica, sans-serif";

    let RatioH = 1600;
    let RatioW =  720;

    let FillWindow = false;  // false mantém 'ratio', true ocupa o espaço disponível

//--------------------------------------
// Items

    // COMIDAS
    // Bolinho caipira -  4
    // Milho verde     -  4
    // Pastel          -  8
    // Lanche natural  - 10
    // Buraco quente   - 10

    // BEBIDAS
    // Água         - 3
    // Suco         - 5
    // Refrigerante - 7

    // DOCES
    // Picolé       - 3
    // Cupcake      - 6
    // Maçã do amor - 5

    // OUTROS
    // Brincadeiras - 5

    let Item = [];

    Item.push(CriarItem("Bolinho caipira", "Bolinhos caipiras",  4, corComidas));
    Item.push(CriarItem("Milho verde"    , "Milhos verdes"    ,  4, corComidas));
    Item.push(CriarItem("Pastel"         , "Pastéis"          ,  8, corComidas));
    Item.push(CriarItem("Lanche natural" , "Lanches naturais" , 10, corComidas));
    Item.push(CriarItem("Buraco quente"  , "Buracos quentes"  , 10, corComidas));

    Item.push(CriarItem("Água"        , "Águas"        , 3, corBebidas));
    Item.push(CriarItem("Suco"        , "Sucos"        , 5, corBebidas));
    Item.push(CriarItem("Refrigerante", "Refrigerantes", 7, corBebidas));

    Item.push(CriarItem("Picolé"      , "Picolés"      , 3, corDoces));
    Item.push(CriarItem("Cupcake"     , "Cupcakes"     , 6, corDoces));
    Item.push(CriarItem("Maçã do amor", "Maçãs do amor", 5, corDoces));

    Item.push(CriarItem("Brincadeira", "Brincadeiras", 5, corOutros));

//--------------------------------------
// Controles

    let btnZerar      = CriarDiv("btnZerar"     , Main, corZerar     , "Zerar" , Reset);
    let btnFullscreen = CriarDiv("btnFullscreen", Main, corFullscreen, "#"     , FullscreenToggle);
    let lblTotal1     = CriarDiv("lblTotal1"    , Main, ""           , "Total:", null);
    let lblTotal2     = CriarDiv("lblTotal2"    , Main, corTotal     , "?"     , null);

//--------------------------------------
// Variáveis

    let Fullscreen = false;

    let XX = 0;
    let YY = 0;
    let ZZ = 0;

//--------------------------------------
// Inicialização

    DisableSelection(Page);

    window.onresize = OnResize;
    ResizeFactor = 1;
    Reset();

//-------------------------------------------------------------------------------------//
// Functions                                                                           //
//-------------------------------------------------------------------------------------//

function CriarItem(singular, plural, preco, cor)
{
    let nome = singular;

    let div = CriarDiv(nome, Main, cor, "", Item_Click);
    div.Singular = singular;
    div.Plural   = plural;
    div.Preco    = preco;
    div.Qtd   = 0;
    div.Total = 0;

    div.lblQtd   = CriarLbl(nome + " lblQtd"  , div, "", "?" , "", 0, null);
    div.lblNome  = CriarLbl(nome + " lblNome" , div, "", nome, "", 0, null);
    div.lblTotal = CriarLbl(nome + " lblTotal", div, "", "?" , "", 0, null);

    S_PointerNone(div.lblQtd, div.lblNome, div.lblTotal);

    return div;
}
//----------------------------------------------------------------------

function ResizeAll()
{
    //-----------------------
    // Main

        document.title = "Festa Junina "; // + ResizeFactor.toFixed(1) + " (" + XX + "  " + YY + "  " + ZZ + ")";

        let x = 0;  // Margem
        Pos(Main, x, x, RatioH - 2*x, RatioW - 2*x);
        S_FontSize(32, Main);
        S_FontWeight(700, Main);
        S_TextColor(mdWhite, Main);

        let col = 7;
        Main.SetGrid(13, col, 0);

    //--------------------------------------

    let totalGeral = 0;

    for (let i=0 ; i<Item.length ; i++)
    {
        let item  = Item[i];
        let qtd   = item.Qtd;
        let preco = item.Preco;
        let total = qtd * preco;

        totalGeral += total;

        item.Pos(i+1, 1, 1, col, 10);
        item.SetGrid(1, col);

        item.lblQtd  .Pos(1, 1, 1, 1);
        item.lblNome .Pos(1, 2, 1, col-2);
        item.lblTotal.Pos(1, col, 1, 1);

        SetDivTextLeft(item.lblNome, 0);
        SetDivTexto(item.lblNome, (qtd < 2) ? item.Singular : item.Plural);

        SetDivTexto(item.lblQtd  , (qtd   == 0 ? "" : qtd));
        SetDivTexto(item.lblTotal, (total == 0 ? "" : total));

        if (qtd == 0) S_Filter(F_Opacity( 30), item);
        else          S_Filter(F_Opacity(100), item);
    }

    //--------------------------------------

    btnZerar     .Pos(13, 1, 1, 2, 15);
    btnFullscreen.Pos(13, 3, 1, 1, 15);

    if (totalGeral == 0) S_Filter(F_Opacity( 30), btnZerar);
    else                 S_Filter(F_Opacity(100), btnZerar);

    //--------------------------------------

    lblTotal1.Pos(13, 4.3  , 1, 2, 15);
    lblTotal2.Pos(13, col-1, 1, 2, 15);

    S_TextColor(mdBlack, lblTotal1, lblTotal2);
    SetDivTexto(lblTotal2, totalGeral);

    //--------------------------------------

    S_Radius(12                           , ...Item, btnZerar, btnFullscreen, lblTotal2);
    S_Shadow(4, 4, 6, 0, Opac(80, mdBlack), ...Item, btnZerar, btnFullscreen, lblTotal2);
}
//----------------------------------------------------------------------

function Reset()
{
    for (let i of Item) i.Qtd = 0;

    OnResize();
}
//----------------------------------------------------------------------

function FullscreenToggle()
{
    if (Fullscreen == false) document.documentElement.requestFullscreen();
    else                     document.exitFullscreen();

    Fullscreen = !Fullscreen;
}
//----------------------------------------------------------------------

function KeyDown(e)
{
    if (e != undefined) e.stopPropagation();

    if (e.key == "Enter")
    {
        FullscreenToggle();
    }

    //---------------------------

    let fator = 1;
    if (e.ctrlKey  == true) fator = 10;

    if (e.key == "+") { ResizeFactor += 0.25; OnResize(); }
    if (e.key == "-") { ResizeFactor -= 0.25; OnResize(); }
    if (e.key == "*") { ResizeFactor  = 1.00; OnResize(); }

    if (e.key == "o") { XX-=fator; OnResize(); }
    if (e.key == "p") { XX+=fator; OnResize(); }
    if (e.key == "q") { YY-=fator; OnResize(); }
    if (e.key == "a") { YY+=fator; OnResize(); }
    if (e.key == "w") { ZZ++;      OnResize(); }
    if (e.key == "s") { ZZ--;      OnResize(); }
}
//----------------------------------------------------------------------

function Item_Click(e)
{
    if (e != undefined) e.stopPropagation();

    let meio = this.offsetWidth / 2;
    let x    = e.offsetX;

    if (x <  meio) this.Qtd--;
    if (x >= meio) this.Qtd++;

    if (this.Qtd <  0) this.Qtd = 0;
    if (this.Qtd > 100) this.Qtd = 100;

    OnResize();
}
//----------------------------------------------------------------------
