const mongoose = require("mongoose");

const mongoDb = "mongodb+srv://root:root@cluster0.a2b05.mongodb.net/applelergic?retryWrites=true&w=majority";
const ProductSchema = require("../api/product/product.model");
const product = [
    {
        "name":"Nut Bar sabor chocolate oscuro y almendras Kellogg's 165 g",
        "brand":"Kellogs",
        "ingredients":"cacahuates tostados (min. 29%), cobertura sabor chocolate oscuro (mín. 16%) [azúcar, grasa vegetal hidrogenada, cocoa alcalina, almidón de maíz, emulsificante (lecitina de soya), saborizante natural a vainilla], almendras tostadas (mín. 13%), glucosa, hojuelas de avena entera, trocitos sabor a chocolate (mín. 5%) [azúcar, grasa vegetal, sólidos de cacao, emulsificante (lectina de soya), sal], azúcar, fructosa, coco, arroz inflado, dextrosa, aceite de palma, humectante (glicerina), humectante (sorbitol), sal, extracto de romero, emulsificante (lecitina de soya), saborizante natural a vainilla, leche descremada en polvo.",
        "allergens":"gluten, leche, almendras, cacahuetes, soja, coco, cacao",
        "photo":"https://images.food-watching.com/webp/image_url/0038000148033-image_url.webp",
        "qr":"0038000148033",
        "code":"0038000148033",
        "nfc":"0038000148033"
    },
    {
        "name":"Mejillones en escabeche con aceite de oliva",
        "brand":"Hacendado",
        "ingredients":"mejillones (mytilus galloprovincialis), aceite de oliva (27%), vinagre de vino, sal, aroma natural, laurel y especias,",
        "allergens":"moluscos",
        "photo":"https://images.food-watching.com/webp/image_url/8480000186010-image_url.webp",
        "qr":"8480000186010",
        "code":"8480000186010",
        "nfc":"8480000186010"
    },
    {
        "name":"Paté vegetariano Tofu Cebolla",
        "brand":"GutBio",
        "ingredients":"proteína de soja, grasa de palma, tofu (18%) (habas de soja*, agua, cloruro de magnesio (e-511), sulfato de calcio (e-516), cebolla* (14%), agua, mostaza (agua, semillas de mostaza*, vinagre de vino*, sal marina, condimentos*, plantas aromáticas*), tofu ahumado (2%) [habas de soja*, aqua, salsa de soja (agua, habas de soja*, trigo*, sal marina), cloruro de magnesio (e-511), sulfato de calcio (e-516), humo], aceite de girasol*, manzana*, sal marina, condimentos*, levadura (soja), apio*, plantas aromáticas*. (* ingredientes procedentes de la agricultura ecológica).",
        "allergens":"apio, gluten, mostaza, soja",
        "photo":"https://images.food-watching.com/webp/image_url/2000000023730-image_url.webp",
        "qr":"2000000023730",
        "code":"2000000023730",
        "nfc":"2000000023730"
    },
    {
        "name":"Salsa de mostaza",
        "brand":"Prima",
        "ingredients":"agua, vinagre, mostaza, azucares, sal, especias yy extracto de especias",
        "allergens":"mostaza",
        "photo":"https://images.food-watching.com/webp/image_url/0000084154071-image_url.webp",
        "qr":"0000084154071",
        "code":"0000084154071",
        "nfc":"0000084154071"
    },
    {
        "name":"Baguete atún ",
        "brand":"Carrefour",
        "ingredients":"harina de trigo, concentrado de tomate 16,7%, agua, atún (katsuwonus pelamis) 10,7%, edam 8,4%, cebolla roja 4,5%, aceite de colza, tomate 2,2%, aceite de girasol, levadura, plantas aromáticas, sal, azúcar, almidón de patata, almidón de trigo, ajo, proteína de trigo, especias.",
        "allergens":"apio, crustáceos, pez, gluten, leche, moluscos",
        "photo":"https://images.food-watching.com/webp/image_url/3560070205462-image_url.webp",
        "qr":"3560070205462",
        "code":"3560070205462",
        "nfc":"3560070205462"
    },
    {
        "name":"Ensalada completa césar con pollo y queso",
        "brand":"Florette",
        "ingredients":"escarola rizada, radicchio, canónigo. salsa césar (24%): agua, aceite de girasol, vinagre, azúcar, salsa de mostaza (agua, vinagre de alcohol, semillas de mostaza, azúcar, sal, almidón modificado de maíz, especias, extractos de plantas aromáticas, conservador (e202)), sal, queso en polvo, yema de huevo en polvo, almidón modificado de maíz, acidulante (e330), aromas, conservadores (e202, e211), estabilizante (e415), cebolla en polvo, ajo en polvo, antioxidantes (e385, e320). queso curado parmarella (12%): leche cruda, sal, fermentos lácticos, cuajo. pollo (14%): pechuga de pollo, sal, dextrosa, aroma de humo, aroma, estabilizantes (e451i), espesante (e407). cubos de pan de trigo tostado: harina de trigo, aceite vegetal (girasol), dextrosa,gluten de trigo, levadura, sal, suero de leche, extracto de malta de cebada, antioxidante (ácido ascórbico).",
        "allergens":"huevos, gluten, leche, mostaza",
        "photo":"https://images.food-watching.com/webp/image_url/8414516078354-image_url.webp",
        "qr":"8414516078354",
        "code":"8414516078354",
        "nfc":"8414516078354"
    },
    {
        "name":"Solomillo de pollo marinado empanado",
        "brand":"el pozo",
        "ingredients":"solomillo de pollo salmuerizado (75%) (solomillo de pollo (95%), agua, sal, azúcar, dextrina de maíz, antioxidantes (citratos de sodio y eritorbato sódico), estabilizantes (sorbitol y carragenanos trifosfatos), conservadores (lactató potásico, acetatos de potasio). cobertura (25%) (harina de arroz, harina de garbanzo y maiz, ajo en polvo, dextrosa, sal, perejil deshidratado, emulgente (monoglicéridos. y diclicéridos de ácidos grașos), especias (cúrcuma, extracto de pimiento), colorante (caramelo natural), aceite de girasol, agua, almidón de patata, tapioca y arroz, fibra de citricos, huevo en polvo deshidratado).",
        "allergens":"huevos, maiz, arroz",
        "photo":"https://images.food-watching.com/webp/image_url/2980928003360-image_url.webp",
        "qr":"2980928003360",
        "code":"2980928003360",
        "nfc":"2980928003360"
    },
    {
        "name":"Leche de almendras",
        "brand":"Almond Breeze",
        "ingredients":"agua, almendras (2%), carbonato de calcio, sal marina, emulgente: lecitina de girasol; estabilizante: goma gelana; aroma natural, vitaminas: d2, e, b12.",
        "allergens":"Almendras",
        "photo":"https://images.food-watching.com/webp/image_url/0041570112731-image_url.webp",
        "qr":"0041570112731",
        "code":"0041570112731",
        "nfc":"0041570112731"
    },
    {
        "name":"Cola Cao",
        "brand":"Cola Cao",
        "ingredients":"azúcar de caña, cacao desgrasado natural (22%), crema de cereal kola-malteado (harina de trigo, extracto de malta de cebada, aroma natural: extracto de nuez de cola), sales minerales (calcio, fósforo), aromas, sal.",
        "allergens":"gluten, almendras, cacao",
        "photo":"https://images.food-watching.com/webp/image_url/2000000096706-image_url.webp",
        "qr":"2000000096706",
        "code":"2000000096706",
        "nfc":"2000000096706"
    },
    {
        "name":"Hamburguesas Verduras y Legumbres",
        "brand":"Biográ",
        "ingredients":"zanahoria*, arroz integral*, lenteja roja* (12%), cebolla*, copos de patata*, almidón de tapioca*, sémola de maíz*, chía (4%), harina de trigo sarraceno*, garbanzos*, tomate*, jarabe de ágave*, aceite de girasol*, sal marina. *procedente de agricultura ecológica.",
        "allergens":"arroz, almendras, apio, huevos, gluten, leche, sésamo, soja, lenteja, legumbres, tomate, maiz, trigo",
        "photo":"https://images.food-watching.com/webp/image_url/8426904173565-image_url.webp",
        "qr":"8426904173565",
        "code":"8426904173565",
        "nfc":"8426904173565"
    },
    {
        "name":"Hummus con aceite de oliva",
        "brand":"Orexis",
        "ingredients":"garbanzos cocidos 49% (agua, garbanzos), aceite vegetal (nabina), tahini 15% (pasta de semillas de sésamo), agua, concentrado de zumo de limón, aceite de oliva 2%, puré de ajo, conservador: sorbato potásico, sal",
        "allergens":"sesamo",
        "photo":"https://images.food-watching.com/webp/image_url/5013543007752-image_url.webp",
        "qr":"5013543007752",
        "code":"5013543007752",
        "nfc":"5013543007752"
    },
    {
        "name":"Galletas María",
        "brand":"Gullón",
        "ingredients":"harina de trigo 65,5%, azucar, grasa vegetal (palma) jarabe de glucosa y fructosa, lactosa (leche), gasificantes (carbonato ácido de sodio y carbonato ácido de amonio), sal, emulgente (lecitina de soja), antioxidante metabisulfito sódico). puede contener trazas de sésamo.",
        "allergens":"gluten, leche, sésamo, soja",
        "photo":"https://images.food-watching.com/webp/image_url/8410376006070-image_url.webp",
        "qr":"8410376006070",
        "code":"8410376006070",
        "nfc":"8410376006070"
    },
    {
        "name":"Vino Rioja joven 2011 Orejudo",
        "brand":"Orellut",
        "ingredients":"uvas tempranillo.    ",
        "allergens":"uva",
        "photo":"https://images.food-watching.com/webp/image_url/8423286008690-image_url.webp",
        "qr":"8423286008690",
        "code":"8423286008690",
        "nfc":"8423286008690"
    },
    {
        "name":"Tomate frito ecológico",
        "brand":"Orlando",
        "ingredients":"tomate* (154 g de tomate por 100 g de producto), aceite de girasol* (sofrito con cebollas* y ajos frescos*), azúcar*, almidón de maíz* y sal. (* ingredientes procedentes de la agricultura ecológica).",
        "allergens":"tomate, maiz",
        "photo":"https://images.food-watching.com/webp/image_url/8410066120888-image_url.webp",
        "qr":"8410066120888",
        "code":"8410066120888",
        "nfc":"8410066120888"
    },
    {
        "name":"Helado de Tiramisú",
        "brand":"Carrefour",
        "ingredients":"agua, azúcar, jarabe de glucosa, aceite de coco, maltodextrina, galletas (4%) (harina de trigo, azúcar, grasas y aceites vegetales (coco, girasol), jarabe de glucosa, emulgente: lecitina de soja, gasificantes: carbonato ácido de sodio - carbonato ácido de amonio, sal, aromas), cacao magro (3,5%), pasta de anacardos (0,8%), dextrosa, proteínas de guisante, emulgentes: monoglicéridos y diglicéridos de ácidos grasos, ésteres de propano-1,2-diol de ácidos grasos, estabilizantes: goma garrofín - goma guar - carragenanos, sal marina, aromas (con colorante: caramelo), aroma.",
        "allergens":"glucosa, coco, trigo, soja, cacao, anacardos, almendras, gluten",
        "photo":"https://images.food-watching.com/webp/image_url/8006040183002-image_url.webp",
        "qr":"8006040183002",
        "code":"8006040183002",
        "nfc":"8006040183002"
    },
    {
        "name":"Postre de soja cremoso con frambuesa",
        "brand":"Sojasun",
        "ingredients":"bebida de soja 62% (agua, habas de soja 10,2%), frambuesa 12%, azúcar, almidón de arroz, fosfato de calcio (e-341), espesantes: goma guar (e-412) y pectina (e-440); zumo de limón a base de concentrado, zumo de zanahoria negra concentrado, aroma natural, aroma natural de vainilla, vitamina d, fermentos seleccionados. (nota del redactor: el producto indica que es 100% vegetal, por tanto la vitamina d se supone que es d2, de origen no animal).",
        "allergens":"soja, frambuesa, arroz",
        "photo":"https://images.food-watching.com/webp/image_url/3273227581837-image_url.webp",
        "qr":"3273227581837",
        "code":"3273227581837",
        "nfc":"3273227581837"
    },
    
  ];
  const productDocuments = product.map((product) => new ProductSchema(product));
  
  mongoose
    .connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      const allProduct = await ProductSchema.find();
      if (allProduct.length) {
        await ProductSchema.collection.drop();
      }
    })
    .catch((err) => console.log(`Error deleting Products: ${err}`))
    .then(async () => {
      await ProductSchema.insertMany(productDocuments);
      console.log("Product successfully created");
    })
    .catch((err) => console.log(`Error creating Products: ${err}`))
    .finally(() => mongoose.disconnect());