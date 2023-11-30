import React, { useEffect, useState } from "react";

const PapersDisplay2 = ({ papersList }) => {
  // console.log("ahdjhksa" + papersList);
  let asbmb =
    "Achuthan,Adikusuma,Agius,Agnew,Agostino,Al Halawani,Aleksandrova,Alenzi,Alfaro-Chavez,Alhulais,Allen,Allen,Altin,Anderson,Anderson,Anderson,Anggono,Antoney,Antonjuk,Apaja,Arishi,Armarego,Arudkumar,Aryal,Ashton,Ashton,Astore,Atkin-Smith,Atkinson,Awad,Bach,Bacic,Baell,Bagley,Bahlo,Baker,Baker,Baklous,Baldwin,Balmer,Balmer,Baral,Barker,Barnard,Barritt,Bartolec,Batho,Baum,Baxter,Baxter,Beck,Beddoe,Belaidi,Bencina,Bentel,Bernardini,Bhattacharjee,Bieniawski,Bindra,Black,Blakeley,Blatch,Boag,Board,Boecking,Bond,Borg,Bottrill,Botvinik,Bourdon,Bournias,Bramich,Brazel,Briot,Brock,Brown,Brown,Brown,Bruning,Bruno,Bryan,Bryce,Brzozowski,Buchanan,Buck,Buck,Buffier,Bumbak,Burgess,Burnell,Burnett,Caballes,Cadell,Cai,Calabrese,Call,Callaghan,Callegari,Calvert,Camakaris,Campbell,Campbell,Campbell,Campbell-Clause,Cao,Capell-Hattam,Carroll,Caruso,Carver,Casella,Chan,Chan,Chan,Chatzileontiadou,Chen,Chen,Chen,Cheng,Cheng,Cheng,Cheong,Chey,Chin,Chitti,Chmielewski,Chong,Chong,Chong,Chooi,Choudhury,Christie,Christie,Christodoulou,Christofides,Christopherson,Chua,Ciacchi,Ciacchi,Cianciarulo,Clark,Clark,Clark,Clarke,Clark-Walker,Clements,Clemons,Clemson,Coates,Cobbold,Cobos,Collins,Collins,Colman,Compton,Conigrave,Conlin,Conroy,Coombs,Cooney,Copeland,Corbett,Corry,Cory,Costabile,Cotter,Cowman,Cox,Cox,Cox,Crabb,Craig,Craig,Craik,Crameri,Crane,Cranfield,Craven,Crawford,Crkvencic,Crossett,Crossley,Crouch,Cryle,Cubeddu,Cui,Cunliffe,Curry-Hyde,Cursons,Czabotar,Dagley,Dagley,Daly,Das,Date,Davey,Davidovich,Davies,Davies,Dawson,Day,Day,De Nardo,Deans,Debler,Dela Cruz,Denyer,Deshpande,Devenish,Devkota,Dewson,Di Trapani,Dichtl,Dickson,Didan,Ding,Dirr,Dixon,Dixon,Djordjevic,Doblin,Dobson,Don,Dong,Dorstyn,Doyle,Doyle,Driver,Du,Duggin,Dunkley,Dunstone,Durand,Dwyer,Dyson,Dzamko,Dzundza,Ebert,Ecroyd,Edgington-Mitchell,Egan,Eisemann,El-Kamand,Ellisdon,Entsch,Erpf,Espinoza,Faber,Fairlie,Fairweather,Falk,Fardy,Farenc,Farrugia,Fath,Fecondo,Fenton,Fernley,Ferreira,Filipovska,Fimmel,Firth,Fischer,Fisher,Fitschen,Fletcher,Fleuren,Fonseka,Forbes,Formosa,Forwood,Fox,Fox,Franck,Frankenberg,Frazer,Friedman,Fritz,Frkic,Fuh,Furlong,Furness,Gajewska,Galea,Gamsjaeger,Gan,Ganly,Gao,Gao,Garama,Garay,Garg,Garnish,Gates,Gecz,Gee,Gee,Geiger,Georgiou,Georgiou,Ghifari,Ghosal,Gibbons,Gillam,Gill-Hille,Gleeson,Glukhova,Goeschl,Gonda,Goodall,Goodman,Goodson,Goold,Gooley,Gorman,Gorrell,Gou,Gowda,Graham,Gras,Grasso,Gready,Grieves,Griffin,Griffiths,Grigson,Grinter,Grosas,Grounds,Gu,Guss,Haber,Habila,Hagemeyer,Hagg,Halili,Hall,Hambly,Hamon,Hannan,Hannan,Hansman,Hanssen,Hao Shen,Hao,Hardeman,Hardy,Harlington,Harney,Harry,Hart,Harvey,Hashmi,Hatch,Hatters,Hawes,Hawkins,Hayward,Haywood,Healy,Heaton,Hebbard,Heierhorst,Hein,Hellens,Henderson,Hennebry,Henry,Heras,Herd,Herington,Herold,Hibbs,Hicks,Higgins,Hill,Hill,Hill,Hiller,Hodge,Holien,Holloway,Hong,Hopper,Hoque,Horibe,Horne,Houghton,Howitt,Hu,Huang,Huang,Huber,Hudson,Hughes,Hughes,Hulett,Hume,Humphrys,Hung,Huynh,Hwa Tay,Hynds,Hynes,Ibri,Ingley,Irving,Ishmayana,Ittner,Iyer,Jabbar,Jackman,Jackson,Jacques,Jacques,James,Jans,Jastrzebski,Javed,Jayatilleke,Jenkins,Ji,Jiramongkal,Jochem,Johansen-Leete,Johnston,Johnston,Johnston,Johnstone,Johnstone,Johnstone,Jolly,Jones,Jones,Jones,Jones,Josephs,Jovcevski,Kaczmarski,Kalinski,Kang,Kang,Kapoor,Kavallaris,Kazemi,Keen,Keizer,Kemp,Kenneth Anye,Kerbler,Kerr,Kershaw,Ketprasit,Khaleque,Khanna,Kile,Kim,Kirby,Kirk,Kluck,Knight,Knott,Kobe,Kolarich,Komander,Kriachkov,Kropp,Kuang,Kuchel,Kuit,Kumar,Kumar,Kurdistani,Kusnadi,Kutondo,Kvansakul,Kwah,Kwan,Kwok Van Der Giezen,La Fontaine,La Gruta,Lacey,Lagnado,Lalaoui,Lamb,Landsberg,Lane,Langendorf,Larance,Lau,Lau,Lau,Lau,Lawen,Lawlor,Lawrence,Lay,Lazarou,Le Nours,Leaver,Lebard,Lebhar,Lechtenberg,Lee,Lee,Lee,Lee,Legovich,Lenardon,Leong,Leung,Lewis,Leyton,Li,Li,Li,Li,Liau,Lilley,Lim,Lim,Lim,Lin,Ling,Lipscombe,Lisnyak,Lister,Lithgow,Liu,Loh,long,Lopez,Lorenzon,Loughlin,Louw,Love,Low,Lu,Lucas,Ludwig,Lynch,Macaskill,Macdonald,Mackay,Mackie,Macleod,Madugalle,Maghool,Maher,Mahony,Majewski,Major,Maker,Malcolm,Malik,Man,Manley,Manucat-Tan,Mao,Mark,Marshall,Marshall,Marshall,Martin,Martin,Maruta,Marzan,Masselot-Joubert,Matak,Matheson,Mathivanan,Mathur,Matthews,Mattick,Mayfosh,Mazhar,Mccombe,Mcconville,McDevitt,Mcdonagh,Mcdougal,McEwan,Mcfarlane,Mcgee,Mcgowan,Mcguinness,Mcinerney,Mckenzie,Mclaughlin,Mcleod,Mcmurchie,Mcrae,Mcrae-Johns,McWilliam,Meikle,Mekkawy,Melonek,Meng,Menouhos,Michael,Michalski,Michie,Migault,Miller,Milne,Mintern,Mirzadeh,Mishra,Mitchell,Mobli,Moghaddam,Montin,Morf,Morgan,Morita,Morris,Morris,Morris,Mortimer,Morton,Moscoso,Muellner-Wong,Muiznieks,Muller,Munder,Munn,Munro,Murcha,Murdolo,Murphy,Murray,Murray,Mustafa,Myer,Myers,Mylne,Naiker,Nanson,Naser,Natoli,Naylor,Nedeva,Neill,Neville,Newbigin,Newcombe,Newman,Newton,Ng,Ng,Ngai,Ngu,Nguyen,Nguyen,Nguyen,Nguyen,Nguyen,Nguyen,Nicholson,Nicola,Nicoletto,Nixon,Nonis,Norris,Norton,Oakhill,Oakley,O'Connell,O'dea,Odell,O'Lone,O'Mara,Ong,Orlowska,O'Rourke,Osellame,Otruba,Outram,Oyong,Ozkocak,P. Umali,Padman,Pagan,Pagel,Pajic,Pakay,Pal,Palmer,Pang,Papakonstantinou,Parish,Parker,Parker,Parslow,Patch,Patel,Paxman,Payne,Peacock,Peady,Peet,Petroeschevsky,Phung,Pienaar,Pierotti,Pilcher,Pineda Gonzalez,Piper,Piper,Pitman,Pitson,Pittard,Piva,Plange,Plompen,Poa,Poddar,Politan,Polya,Poon,Porra,Potoczky,Poudyal,Pratap,Preiss,Price,Pukala,Pullakhandam,Pulsford,Purcell,Purcell,Puthalakath,Putoczki,Qi,Qian,Quinlan,Rackham,Rae,Rahman,Ramarathinam,Ramsay,Ranaweera,Randall,Rasko,Ray,Read,Reckdharajkumar,Reddel,Richardson,Ritchie,Roach,Roberts,Robinson,Robinson,Robinson,Robinson,Roche,Rodgers,Rodriguez,Roennfeldt,Roman,Roopasingam,Rosdah,Rose,Rose,Rossetto,Rossjohn,Rothnagel,Rouet,Roufogalis,Rouiller,Rourke,Rowland,Royan,Rozario,Rudler,Ruiz Flores,Runnegar,Rushworth,Russell,Rusu,Ryan,Sadleir,Saliba,Salita,Samarawickrema,Samuel,Santavanond,Sanwlani,Scally,Schibeci,Schroder,Schulz,Scott,Scott,Seager,Separovic,Separovich,Sernee,Shafik,Shah,Shah,Shahi,Shahine,Shanbhag,Sharifi Tabar,Sharma,Sharma,Sharpe,Shaw,Shearwin,Sheikh,Shi,Shield,Shing,Shirokikh,Shohayeb,Siddiqui,Silke,Simitzis,Simpson,Sims,Sims,Singh,Small,Smallhorn,Smith,Smith,Smith,Smith,Smith,Smith,Snopek,Soares Da Costa,Sobieszczuk,Solomon,Spagnoli,Spenkelink,Spry,Stanley,Sternicki,Stewart,Stewart,Stewart,Stoeckli,Stojanovski,Stone,Stroud,Stubenrauch,Sturm,Sturre,Subedi,Subedi,Suh,Sukhoverkov,Sullivan,Summers,Sunde,Suraweera,Swarbrick,Sytnyk,Szyszka,Tai,Talbot,Tan,Tan,Tan,Tan,Tanipour,Tata,Taylor,Teasdale,Terpolilli,Thal,Tham,Thaysen-Andersen,Thirunavukkarasu,Thomasson,Thompson,Thompson,Thomson,Thomson,Tiganis,Tilley,Timmins,Tixeira,Todd,Toh,Tolun,Tonissen,Tou,Tran,Traven,Tregear,Tremethick,Trevelyan,Trifilo,Trowbridge,Truong,Tsatsaronis,Tsimbalyuk,Tuckey,Tulloch,Turek,Turner,Ugonotti,Uoselis,Upton,Uren,Van Asten,Van Dreumel,Van Driel,Vandborg,Vasanthakumar,Vasudevan,Vatandoust,Ve,Vella,Verdonk,Verkade,Visvader,Vivian,Voskoboinik,Vrielink,Vu,Vuillemot,Wahid,Wai,Walker,Walkley,Walsh,Walshe,Wang,Wang,Wang,Wang,Wang,Watson,Watson,Weeks,Wegener,Weiss,Werth,West,Whelan,Whelan,Whinn,Whisstock,White,Whitefield,Wijenayake,Wijeyewickrema,Wilde,Wiles,Wiley,Wilkinson-White,Willems-Jones,Williams,Williams,Wills,Wilson,Wilson,Wilton,Windsor,Winzor,Witham,Wong,Wong,Woodcraft,Woodfield,Woods,Wookey,Wootten,Wright,Wu,Wubben,Wun,Wyllie,Wyzenbeek,Xie,Yang,Yang,Yap,Yek,Yeoh,Yong,Young,Yu,Yu,Zadow,Zaenker,Zahra,Zareie,Zeng,Zhang,Zhang,Zhang,Zhang,Zhang,Zhao,Zheng,Zhong,Zuryn";
  let asbmblist = asbmb.split(",");
  const list = asbmblist.map((author) => author.toLowerCase());

  let lastAuthors = [];
  let asbmbPapers = [];
  let papers = [];

  const test = ["Hatters", "Doudna", "asdds"];

  console.log("asm" + asbmblist.length);

  const createAuthorList = () => {
    // console.log("paper" + JSON.stringify(papersList));
    papersList.forEach((paper, idx) => {
      const alist = paper.authors.split(", ");
      const last = alist[alist.length - 1].split(" ")[0].toLowerCase();
      console.log("list" + alist);
      console.log("last" + last);
      lastAuthors.push({ author: last, paper: paper });
      if (idx === papersList.length - 1) {
        checkAuthors(lastAuthors);
      }
    });
  };

  const checkAuthors = (lastAuthors) => {
    console.log(lastAuthors);
    lastAuthors.forEach((auth, idx) => {
      if (list.includes(auth.author)) {
        console.log("includes" + auth.author);
        asbmbPapers.push(auth);
      } else {
        console.log("not" + auth.author);
      }
      if (idx === lastAuthors.length - 1) console.log("asbab");
    });
  };

  createAuthorList();

  let papDisplay;
  if (asbmbPapers.length) {
    papDisplay = asbmbPapers.map((paper, idx) => {
      return (
        <div key={idx}>
          <p>{idx + 1}</p>
          <p>{paper.paper.title}</p>
          <p>{paper.paper.authors}</p>
          <p>{paper.paper.journal}</p>
        </div>
      );
    });
  } else {
    papDisplay = <h1>Loading...</h1>;
  }

  return <>{papDisplay}</>;
};
export default PapersDisplay2;
