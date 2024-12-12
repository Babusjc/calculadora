//-------------------------------------------------------------------------------------//

"use strict"

//-------------------------------------------------------------------------------------//
// Material Design Colors                                                              //

    let mdClear      =  "#00000000";
    let mdWhite      =  "#FFFFFF";
    let mdBlack      =  "#000000";
    let mdGray       = ["#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161", "#424242", "#212121"];
    let mdBlueGray   = ["#ECEFF1", "#CFD8DC", "#B0BEC5", "#90A4AE", "#78909C", "#607D8B", "#546E7A", "#455A64", "#37474F", "#263238"];
    let mdBrown      = ["#EFEBE9", "#D7CCC8", "#BCAAA4", "#A1887F", "#8D6E63", "#795548", "#6D4C41", "#5D4037", "#4E342E", "#3E2723"];
    let mdRed        = ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828", "#B71C1C", "#FF8A80", "#FF5252", "#FF1744", "#D50000"];
    let mdGreen      = ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32", "#1B5E20", "#B9F6CA", "#69F0AE", "#00E676", "#00C853"];
    let mdBlue       = ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1", "#82B1FF", "#448AFF", "#2979FF", "#2962FF"];
    let mdYellow     = ["#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B", "#FDD835", "#FBC02D", "#F9A825", "#F57F17", "#FFFF8D", "#FFFF00", "#FFEA00", "#FFD600"];
    let mdCyan       = ["#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00BCD4", "#00ACC1", "#0097A7", "#00838F", "#006064", "#84FFFF", "#18FFFF", "#00E5FF", "#00B8D4"];
    let mdPurple     = ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2", "#6A1B9A", "#4A148C", "#EA80FC", "#E040FB", "#D500F9", "#AA00FF"];
    let mdOrange     = ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#EF6C00", "#E65100", "#FFD180", "#FFAB40", "#FF9100", "#FF6D00"];
    let mdPink       = ["#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#E91E63", "#D81B60", "#C2185B", "#AD1457", "#880E4F", "#FF80AB", "#FF4081", "#F50057", "#C51162"];
    let mdIndigo     = ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", "#283593", "#1A237E", "#8C9EFF", "#536DFE", "#3D5AFE", "#304FFE"];
    let mdTeal       = ["#E0F2F1", "#B2DFDB", "#80CBC4", "#4DB6AC", "#26A69A", "#009688", "#00897B", "#00796B", "#00695C", "#004D40", "#A7FFEB", "#64FFDA", "#1DE9B6", "#00BFA5"];
    let mdLime       = ["#F9FBE7", "#F0F4C3", "#E6EE9C", "#DCE775", "#D4E157", "#CDDC39", "#C0CA33", "#AFB42B", "#9E9D24", "#827717", "#F4FF81", "#EEFF41", "#C6FF00", "#AEEA00"];
    let mdAmber      = ["#FFF8E1", "#FFECB3", "#FFE082", "#FFD54F", "#FFCA28", "#FFC107", "#FFB300", "#FFA000", "#FF8F00", "#FF6F00", "#FFE57F", "#FFD740", "#FFC400", "#FFAB00"];
    let mdLightBlue  = ["#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD", "#01579B", "#80D8FF", "#40C4FF", "#00B0FF", "#0091EA"];
    let mdLightGreen = ["#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581", "#9CCC65", "#8BC34A", "#7CB342", "#689F38", "#558B2F", "#33691E", "#CCFF90", "#B2FF59", "#76FF03", "#64DD17"];
    let mdDeepOrange = ["#FBE9E7", "#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722", "#F4511E", "#E64A19", "#D84315", "#BF360C", "#FF9E80", "#FF6E40", "#FF3D00", "#DD2C00"];
    let mdDeepPurple = ["#EDE7F6", "#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7", "#5E35B1", "#512DA8", "#4527A0", "#311B92", "#B388FF", "#7C4DFF", "#651FFF", "#6200EA"];

    //
//-------------------------------------------------------------------------------------//
// Métodos de configuração                                                             //

    let px = "px";
    let sp = " ";

    let alLeft   = "left";
    let alRight  = "right";
    let alCenter = "center";

    //--------------------------------------

    function SetTop    (obj, top)     { obj.style.top    = UY * top     + px; }
    function SetLeft   (obj, left)    { obj.style.left   = UX * left    + px; }
    function SetAltura (obj, altura)  { obj.style.height = UY * altura  + px; }
    function SetLargura(obj, largura) { obj.style.width  = UX * largura + px; }

    function SetDivTexto(div, t) {div.Texto.innerHTML = t; }

    function SetDivTextLeft (div, p) { div.Texto.style.transform = "translate(   0%, -50%)";  div.Texto.style.left = p       + "%"; }
    function SetDivTextRight(div, p) { div.Texto.style.transform = "translate(-100%, -50%)";  div.Texto.style.left = (100-p) + "%"; }

    function Pos(obj, top, left, altura, largura)
    {
        SetTop    (obj, top);
        SetLeft   (obj, left);
        SetAltura (obj, altura);
        SetLargura(obj, largura);
    }

    //--------------------------------------

    function S_Radius         (r            , ...objs) { for (let obj of objs) obj.style.borderRadius    = r/10*PX+px; }
    function S_Border         (e, t, c      , ...objs) { for (let obj of objs) obj.style.border          = e/10*PX+px + sp + t + sp + c; }
    function S_Outline        (e, t, c      , ...objs) { for (let obj of objs) obj.style.outline         = e/10*PX+px + sp + t + sp + c; }
    function S_Shadow         (x, y, b, s, c, ...objs) { for (let obj of objs) obj.style.boxShadow       = x/10*PX+px + sp + y/10*PX+px + sp + b/10*PX+px + sp + s/10*PX+px + sp + c; }
    function S_ShadowIn       (x, y, b, s, c, ...objs) { for (let obj of objs) obj.style.boxShadow       = x/10*PX+px + sp + y/10*PX+px + sp + b/10*PX+px + sp + s/10*PX+px + sp + c + " inset"; }
    function S_ZIndex         (z            , ...objs) { for (let obj of objs) obj.style.zIndex          = z; }
    function S_Opacity        (o            , ...objs) { for (let obj of objs) obj.style.opacity         = o/100; }
    function S_FontSize       (s            , ...objs) { for (let obj of objs) obj.style.fontSize        = FontSize*s/10 + px; }
    function S_FontWeight     (w            , ...objs) { for (let obj of objs) obj.style.fontWeight      = w; }
    function S_TextColor      (c            , ...objs) { for (let obj of objs) obj.style.color           = c; }
    function S_TextShadow     (x, y, b, c   , ...objs) { for (let obj of objs) obj.style.textShadow      = x/10*PX+px + sp + y/10*PX+px + sp + b/10*PX+px + sp + c; }
    function S_TextAlign      (a            , ...objs) { for (let obj of objs) obj.style.textAlign       = a; }
    function S_Filter         (f            , ...objs) { for (let obj of objs) obj.style.filter          = f; }
    function S_Transform      (t            , ...objs) { for (let obj of objs) obj.style.transform       = t; }
    function S_Background     (c            , ...objs) { for (let obj of objs) obj.style.backgroundColor = c; }
    function S_BackgroundSize (s            , ...objs) { for (let obj of objs) obj.style.backgroundSize  = s; }
    function S_BackgroundImage(i            , ...objs)
    {
        for (let obj of objs)
        {
            obj.style.backgroundImage = (i == "" ? "" : "url('" + i + "')");
            obj.style.backgroundSize  = "100% 100%";
        }
    }
    //--------------------------------------

    function S_Show           (...objs) { for (let obj of objs) obj.style.display       = "block"; }
    function S_Hide           (...objs) { for (let obj of objs) obj.style.display       = "none";  }
    function S_OverflowVisible(...objs) { for (let obj of objs) obj.style.overflow      = "visible"; }
    function S_OverflowHidden (...objs) { for (let obj of objs) obj.style.overflow      = "hidden";  }
    function S_PointerNone    (...objs) { for (let obj of objs) obj.style.pointerEvents = "none"; }
    function S_PointerAuto    (...objs) { for (let obj of objs) obj.style.pointerEvents = "auto"; }

    //--------------------------------------

    function F_Opacity   (o)          { return " opacity("     + o + "%)   "; }  // Default 100 %
    function F_Grayscale (g)          { return " grayscale("   + g + "%)   "; }  // Default   0 %
    function F_Brightness(b)          { return " brightness("  + b + "%)   "; }  // Default 100 %
    function F_Contrast  (c)          { return " contrast("    + c + "%)   "; }  // Default 100 %
    function F_Saturate  (s)          { return " saturate("    + s + "%)   "; }  // Default 100 %
    function F_Sepia     (s)          { return " sepia("       + s + "%)   "; }  // Default   0 %
    function F_Invert    (i)          { return " invert("      + i + "%)   "; }  // Default   0 %
    function F_HueRotate (h)          { return " hue-rotate("  + h + "deg) "; }  // Default   0 deg
    function F_Blur      (b)          { return " blur("        + b/10*PX + px + ") "; }
    function F_DropShadow(x, y, b, c) { return " drop-shadow(" + x/10*PX+px + sp + y/10*PX+px + sp + b/10*PX+px + sp + c + ") "; }

    //--------------------------------------

    function T_Translate(x, y) { return " translate(" + x*UX + px + "," + y*UY + px + ") "; }
    function T_Rotate   (d)    { return " rotate("    + d + "deg) ";                        }
    function T_Scale    (x, y) { return " scale("     + x + "," + y + ") ";                 }
    function T_Skew     (x, y) { return " skew("      + x + "deg" + "," + y + "deg) ";      }

    //
//-------------------------------------------------------------------------------------//
// Métodos e variáveis auxiliares                                                      //

    function Int  (text) { return parseInt  (text, 10); }
    function Float(text) { return parseFloat(text, 10); }

    function Min(a, b) { return (a<=b) ? a : b; }
    function Max(a, b) { return (a>=b) ? a : b; }

    function Limit(n, min, max) { if (n<min) return min; else if (n>max) return max; else return n; }
    function RestaurarCor(cor) { this.style.backgroundColor = cor; }

    function Opac(opac, cor) { return cor.toString() + (Math.round(opac*2.55)).toString(16).toUpperCase(); }  // 0 = transparente ; 100 = opaco

    function PaginaAbrir(pagina, janela) { window.open(pagina, janela); }
    function PaginaVoltar() { history.back(); }

    function Array_Append(a1, a2) { for (let i=0 ; i<a2.length ; i++) a1.push(a2[i]); }
    function Array_Null(a)        { for (let i=0 ; i<a.length ; i++) a[i] = null; }
    function Array_QtdNaoNull(a)  { let qtd = 0;  for (let i=0 ; i<a.length ; i++) if (a[i] != null) qtd++;  return qtd; }

    //--------------------------------------

    function DisableSelection(node)
    {
        if (node.nodeType == 1) node.style.userSelect = "none";
        let child = node.firstChild;
        while (child) { DisableSelection(child);  child = child.nextSibling; }
    }
    //--------------------------------------

    function Rnd(min, max)
    {
        let qtd = max - min + 1;
        let rnd = (Math.floor(Math.random() * qtd)) + min;
        return rnd;
    }
    //--------------------------------------

    function Blink(obj, cor, ms)
    {
        S_Background(obj, cor);
        setTimeout(RestaurarCor.bind(obj, obj.CorOriginal), ms);
    }
    //--------------------------------------

    function Sleep(ms)
    {
        const date = Date.now();
        let currentDate = null;
        do
        {
            currentDate = Date.now();
        } while (currentDate - date < ms);
    }
    //--------------------------------------

    function IsVisible    (   obj)  { return (obj.style.display != "none"); }
    function ToggleVisible(...objs) { for (let obj of objs) IsVisible(obj) ? S_Hide(obj) : S_Show(obj); }

    //--------------------------------------

    let PI      = Math.PI
    let DEG_RAD = PI / 180.0;
    let RAD_DEG = 180.0 / PI;

    //
//-------------------------------------------------------------------------------------//
// OnResize - Variáveis e Método                                                       //

    let ResizeFactor = 1;

    let Altura;
    let Largura;
    let Top;
    let Left;

    let PX;
    let UX;
    let UY;
    let FontSize;

    let Gap;

    //----------------------------------------------------------------------

    function OnResize()
    {
        //--------------------------------------
        // Trocar essas 4 linhas pelas 2 abaixo permite usar
        // a área maior do viewport estendido em celulares e tablets

        // Page.style.height = "100vh";
        // Page.style.width  = "100vw";
        // let larg = Page.offsetWidth;
        // let alt  = Page.offsetHeight;

        let x = 5;

        let larg  = window.innerWidth * ResizeFactor;
        let alt   = window.innerHeight * ResizeFactor;

        Largura = larg;
        Altura  = alt;
        Top     = 0;
        Left    = 0;

        if (FillWindow == false)
        {
            let ratio = RatioH / RatioW;
            if (alt/Largura < ratio) { Largura = Int(alt  / ratio);  Left = (larg - Largura) / 2; }  // Largura maior que a esperada
            else                     { Altura  = Int(larg * ratio);  Top  = (alt - Altura)   / 2; }  // Altura maior que a esperada
        }
        else
        {
            RatioH = window.innerHeight * ResizeFactor;
            RatioW = window.innerWidth * ResizeFactor;
        }

        PX = Max(Altura, Largura) / 100;

        UX = Largura / RatioW;
        UY = Altura  / RatioH;

        Gap = Math.min(RatioH, RatioW) * 0.01;

        //--------------------------------------
        // Page & FontSize

        Page.style.top    = Top     + px;
        Page.style.left   = Left    + px;
        Page.style.height = Altura  + px;
        Page.style.width  = Largura + px;

        FontSize = Max(Altura, Largura) / 90;
        S_FontSize(20, Page);

        //--------------------------------------

        ResizeAll();

        //--------------------------------------

        // let gg = Max(Altura, Largura);
        // let pp = Min(Altura, Largura);
        // let rr = pp * 16 / gg;
        // document.title = "16 : " + rr.toFixed(2);
    }
//-------------------------------------------------------------------------------------//