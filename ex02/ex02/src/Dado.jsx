import react from "react";

const Dado = ({valor})=>{
    const imagens={
        1: "https://www.hiperfer.com.br/numero-residencial-em-aluminio-preto-n-1-125mm-numeral",
        2: "https://hiperfer.cdn.magazord.com.br/img/2022/09/produto/11720/14054-1-numero-residencial-em-aluminio-preto-n-2-185mm-numeral.jpg?ims=500x500",
        3: "https://hiperfer.cdn.magazord.com.br/img/2022/09/produto/11719/14055-1-numero-residencial-em-aluminio-preto-n-3-185mm-numeral.jpg?ims=500x500",
        4: "https://d365e82sgxmduv.cloudfront.net/Custom/Content/Products/23/27/2327862_numero-4-em-acm-preto-125mm-600-4-numeral_m2_638103280570939827.webp",
        5: "https://d365e82sgxmduv.cloudfront.net/Custom/Content/Products/23/27/2327861_numero-5-em-acm-preto-125mm-600-5-numeral_m2_638103280654377717.webp",
        6: "https://d365e82sgxmduv.cloudfront.net/Custom/Content/Products/23/27/2327860_numero-6-em-acm-preto-125mm-600-6-numeral_m2_638103280815310148.webp"
    };
    return(
        <div>
            <img src={imagens[valor]} alt={'Dado com valor ${valor}'}width={100}/>-
        </div>
    );
};
export default Dado;