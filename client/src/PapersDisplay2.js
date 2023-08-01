import React, { useEffect, useState } from "react";

const PapersDisplay2 = ({ papersList }) => {
  // console.log("ahdjhksa" + papersList);
  let asbmb =
    "ACHUTHAN,ADIKUSUMA,AGBAJE,AGUILAR,AHMED,AHMED,AIZEL,ALAGESAN,ALHUWAIDER,ALI,ALLOTTA,ALORRO,ALQUETHAMY,ALROSAN,ALTEMANI,ALTIN,ANAND,ANDERS,ANDERSON,ANDERSON,ANGGONO,ANKO,APAJA,ARMAREGO,ARTHUR,ASHE,ASHTON,ASHTON,ATKIN-SMITH,ATKINSON,ATTWOOD,AUSTRALIAN SERIALS,AWAD,AZIMI,AZZI,BABU REDDIAR,BACH,BACIC,BAGLEY,BAINDUR-HUDSON,BAKER,BAKER,BALAJI,BALDWIN,BALLARD,BARNARD,BARRITT,BARRY,BARTOLEC,BATHGATE,BAUM,BAXTER,BAXTER,BECK,BEDDOE,BEGG,BENCINA,BENNETT,BENTEL,BERNARDINI,BERRY,BERSTEN,BI,BILLUPS,BINDRA,BIRD,BLACKBURN,BLAIR,BLAKELEY,BLATCH,BOARD,BOARDMAN,BOECKING,BOGOYEVITCH,BOND,BOOKER,BORG,BOSE,BOTTRILL,BOUGHTON,BOURNE,BRAIN,BRAR,BRAZEL,BRETTINGHAM-MOORE,BRIDGFORD,BRILLAULT,BRODIE,BROOKS,BROOKS,BROUGHTON,BROWN,BROWN,BROWN,BROWN,BROWN,BRUNING,BRYAN,BRYCE,BRZOZOWSKI,BUCK,BUCK,BUCK,BUDNAR,BULMER,BURGER,BURGESS,BURNELL,BURNETT,BUTTON,BYRT,BYTHELL-DOUGLAS,CAHILL,CALL,CALLAGHAN,CALLAGHAN,CALLEGARI,CAMAKARIS,CAMPBELL,CAMPBELL,CAMPBELL,CANTO,CAO,CAPELL-HATTAM,CARDOSO,CAREY HULYER,CARRIN,CARTER,CARUSO,CARUSO,CARVER,CASAROTTO,CATER,CHAN,CHAN,CHASSAGNON,CHATTERJEE,CHELVANAYAGAM,CHEN,CHEN,CHEONG,CHERRY,CHEY,CHIBANGA,CHIN,CHINKWO,CHITTI,CHITTY,CHIU,CHIVCHIRISTOV,CHONG,CHOOI,CHRIST,CHRISTIE,CHRISTIE,CHRISTODOULOU,CHRISTOFIDES,CHRISTOPHERSON,CHUA,CLARK,CLARK,CLARK,CLARK,CLARK-WALKER,CLARKE,CLAYTOR,CLEMENTS,CLEMENTS,COATES,COBBOLD,COBOS,COLDBECK-SHACKLEY,COLEMAN,COLLINS,COLLINS,COLMAN,COMPTON,CONIGRAVE,COOK,COONEY,COPELAND,CORBETT,COROCHER,CORRY,CORY,COSTABILE,COULIBALY,COWMAN,COX,COX,CRABB,CRAIG,CRAIK,CRANE,CRAVEN,CRISAFULLI,CROMER,CROSS,CROSS,CROSSETT,CROSSLEY,CROUCH,CROUCHER,CRYLE,CUBEDDU,Cui,CUI,CURMI,CURSONS,CZABOTAR,CZECH,D'AMARIO,DACRES,DAGLEY,DAGLEY,DAL MASO,DALY,DALY,DASTPEYMAN,DAVEY,DAVIDOVICH,DAVIS,DAWES,DAWSON,DAY,de JERSEY,DE PONT,de SILVA,DEAN,DEANS,DEHKHODA,DENLEY,DENNIS,DENYER,DESBOIS,DESHPANDE,DESHPANDE,DEUTSCH,DEVENISH,DHAGAT,DI TRAPANI,DICHTL,DICKSON,DING,DIXON,DIXON,DJORDJEVIC,DOBSON,DON,DONNELLY,DORNBUSCH,DORSTYN,DRIVER,DU,DUAN,DUGGIN,DUNKLEY,DUNSTONE,DUONG,DYE,DZAMKO,DZUNDZA,EBERT,ECCLES,ECKLE,ECROYD,EGAN,EJIKE,ELLISDON,EMMERTON,ENDERSBY,ENTSCH,ERNST,EVANS,FABRIZIO,FAIRLIE,FAIRWEATHER,FARENC,FATH,FAZAKERLEY,FAZELINEJAD,FECONDO,FELTHAM,FERNANDEZ,FERNLEY,FERREIRA,FILIPOVSKA,FIMMEL,FISHER,FLETCHER,FONSEKA,FORBES,FORD,FORMOSA,FORWOOD,FOX,FRANK,FRAZER,FRIEDMAN,FUENTES GUIRADO,FURLONG,FURNESS,GADD,GALEA,GALEA,GALIC,GAMSJAEGER,GANGODA,GAO,GECZ,GEDDES,GELISSEN,GELL,GEORGE,GERASSIMOU,GHAFARI,GHAI,GIBBONS,GIL,GILES,GIULIANI,GLEESON,GLOVER,GODDARD-BORGER,GONDA,GOODALL,GOODFELLOW,GOOLD,GORRELL,GOWDA,GRAHAM,GRAHAM,GRAS,GREADY,GREGORY,GRIFFITHS,GRIFFITHS,GRINTER,GROUNDS,GU,GUI,GUNATILAKA,GUNNING,GUSS,GUSTAFSSON,HABER,HAGEMEYER,HALILI,HALL,HALL,HAMBLY,HAMON,HAMPTON-SMITH,HANNAN,HANNAN,HANSSEN,HAO,HARDEMAN,HARDY,HARLEY,HARRISON,HARRY,HARTMANN,HARVEY,HARVEY,HASSAN,HATCH,HATTERS,HAYASHI,HEADLAM,HEALY,HEATON,HEDGER,HEIERHORST,HELFENBAUM,HENDRIKUS,HENNEBRY,HENRY,HERAS,HERAUD-FARLOW,HERD,HERINGTON,HERTZOG,HEWITT,HICKS,HIGGINS,HIGGINS,HILL,HILL,HILL,HILL,HILL,HILLER,HILTON,HINDE,HINDS,HOEHN,HOLLOWAY,HOLT,HONG,HOOGENRAAD,HOOPER,HOPPER,HOQUE,HOR,HORIBE,HORSEFIELD,HOSSEINZADEH,HOUGHTON,HOW,HOWE,HOWITT,HU,HUANG,HUBER,HUDSON,HUGHES,HULETT,HULIN,HUME,HUYNH,HYNDS,HYNES,IGNASIAK,IMPEY,INAKOLLU,INGLEY,IQBAL,IRVING,ISLAM,ITTNER,IYER,JACKSON,JACOBSEN,JACQUES,JACQUES,JAMES,JARVA,JASCHKE,JASTRZEBSKI,JATATUNGA,JAYATILLEKE,JENKINS,JENKINS,JIANG,JIANG,JITRAPAKDEE,JOHN,JOHNSON,JOHNSON,JOHNSON,JOHNSTON,JOHNSTON,JOHNSTONE,JOHNSTONE,JOLLY,JONES,JONES,JOVCEVSKI,KACZMARSKI,KALKAUS,KANG,KAUR,KAVALLARIS,KEARNEY,KEATING,KEEGAN,KEEN,KEIZER,KELLER,KELLERMAN,KEMP,KENRICK,KENYON,KERBLER,KERSHAW,KERWIN,KHANDOKAR,KHANNA,KIELKOPF,KILE,KIM,KING,KITTIPASSORN,KIYOSHI KITA,KLUCK,KNAUPP,KNIGHT,KNIGHTS,KNOTT,KOBE,KONOPKA,KOZLOV,KRAUS,KRYCER,KUCHEL,KUIT,KUMAR,KVANSAKUL,KWAN,LA FONTAINE,LAGNADO,LANDSBERG,LANE,LANGENDORF,LARANCE,LAU,LAW,LAWEN,LAWLOR,LAWRENCE,LAWS,LAY,LAZAROU,LE NOURS,LEARMONTH,LEBARD,LeBLANC,LEE,LEE,LEE,LEE,LEE,LEES,LENARDON,LEWIS,LEWIS,LEYTON,LI,LI,LI,LI,LI,LI,LIEW,LILLEY,LIM,LIM,LIN ,LINDQVIST,LINGAM,LINTON,LIPSCOMBE,LISTER,LITHGOW,LIU,LOOKER,LOPEZ,LOUGHLIN,LOUW,LOVE,LOW,LU,LUDWIG,LUPANCU,LUTZE-MANN,LYNCH,MACAULAY,MACDERMOTT-OPESKIN,MACDONALD,MACKAY,MAGHOOLPILEHROOD,MAHER,MAHONY,MAJEWSKI,MAKER,MALIK,MAN,MAN,MANN,MARIADASON,MARK,MARSHALL,MARTIN,MARTIN,MARTIN,MARTIN,MARTINO,MASEDUNSKAS,MASON,MATHESON,MATHIVANAN,MATTHEWS,MATTICK,McCAUGHEY,McCONVILLE,MCDEVITT,MCDONNELL,MCGEE,MCGOWAN,MCHUGH,McKENZIE,McLAUGHLIN,MCLEAN, Endocrine Soc.,McMURCHIE,McRAE,MEIKLE,MEIRING,MENON,MENOUHOS,MENTING,MICHAEL,MICHALSKI,MICHIE,MILLER,MINTERN,MITCHELL,MITCHELL,MOBLI,MOFFITT,MOILY,MOK,MOORHOUSE,MORITA,MORRIS,MORRISON,MORTON,MOUSLEY,MUBAROKAH,MUIZNIEKS,MUKHOPADHYAY,MULHERN,MULLER,MUNN,MURCHA,MURPHY,MUSTAFA,MYER,MYERS,MYLNE,NACHTSCHATT,NAGLEY,NANSON,NASSIF,NATERA,NEEDHAM,NEILL,NEKRASOV,NEUBAUER,NEWBIGIN,NEWGREEN,NEWMAN,NEWTON,NG,NG,NGO,NGO,NGOEI,NGU,NGUYEN,NGUYEN,NGUYEN,NICHOLSON,NICOLA,NIXON,NORRIS,NORTON,O'CONNELL,O'DONOGHUE,O'MARA,O'ROURKE,OAKES,OAKHILL,OAKLEY,OBEIDY,ODELL,OGUIS,OLSHINA,ONG,OOI,ORANG,OSBORN,OUTRAM,OYONG,PAKAY,PAL,PALMER,PANG,PAPA,PAPAKONSTANTINOU,PAPARELLA,PARISH,PARKER,PARKER,PARKER,PARSLOW,PATCH,PATEL,PATEL,PEACOCK,PEARSALL,PEET,PERKS,PERSSON,PERUGINI,PHAM,PHAN,PHILIPS,PHILLIPS,PHUNG,PIEROTTI,PIKE,PITMAN,PITSON,PITTARD,PIVA,POHL,POLYA,POLYAK,POON,POPOVSKI,PORRA,PORZOOR,PRAHL,PREISS,PRICE,PRIEST,PRIOR,PURCELL,PUSHIRI,PUTHALAKATH,QIAN,QUAN,QUIGLEY,QUINLAN,QUINN,QUINSEY,RACKHAM,RAE,RAEBURN,RAINA,RAJASEKARIAH,RAMARATHINAM,RAMSAY,RANAWEERA,RANINGA,RASHID,RASKO,RATNADIWAKARA,RAYNER,READ,REDDEL,REEHORST,REYNOLDS,RICHARDSON,RIDGE,RIGLAR,RISHI,ROBERTS,ROBERTS,ROBERTSON,ROBINSON,ROBINSON,ROBINSON,ROGERS,ROMAN,ROOKYARD,ROSE,ROSE,ROSSI,ROSSJOHN,ROTH,ROTHNAGEL,ROUET,ROUFOGALIS,ROWLAND,ROY,ROYAN,ROZARIO,RUNNEGAR,RUSSELL,RYAN,SADLEIR,SAINSBURY,SAKTHIVEL,SALIBA,SAMARAWICKREMA,SAMSUDEEN,SAMUEL,SAMUEL,SARKER,SAUNDERS,SAWYER,SCHIBECI,SCHRODER,SCHULZ,SCHUMANN-GILLETT,SCOTNEY,SCOTT,SCOTT,SCOTT,SCOTT,SCOTT,SELKRIG,SELLECK,SEPAROVICH,SERNEE,SHAH,SHAH,SHAHI,SHAHINE,SHANNON,SHARMA,SHARMA,SHARPE,SHATHILI,SHAW,SHEARWIN,SHEIKH,SHI,SHIELD,SHILLING,SHIN,SHING,SHIROKIKH,SHOHAYEB,SHOUBRIDGE,SIIRA,SILKE,SILOVIC,SILVA,SIMS,SIMS,SKELDING,SLOANE,SMALL,SMALLHORN,SMITH,SMITH,SMITH,SMITH,SMITH,SMITH,SMITH,SOARES DA COSTA,SOBIESZCZUK,SOLOMON,SORENSON,SPEIRS,SPERANZA,SPICER,SPILLMAN,SPRY,STANLEY,STEPHENS,STEPHENS,STERNICKI,STEWART,STEWART,STOECKLI,STOJANOVSKI,STONE,STOW,STROUD,STUBENRAUCH,STURM,SUBAS SATISH,SUBEDI,SULLIVAN,SUMMERS,SUNDE,SURAWEERA,SUTER,SWARBRICK,SWEENEY,SYTNYK,TABERLAY,TAEYOUNG,TAN,TAN,TANG,TAYLOR,TEASDALE,TERPOLILLI,THAL,THAM,THAYSEN-ANDERSON,THOMPSON,THOMPSON,THOMSON,TIGANIS,TILLEY,TIXEIRA,TODD,TOH,TONISSEN,TORRADO DEL REY,TRAN,TRAN,TRAVEN,TREGEAR,TREMETHICK,TRUSCOTT,TSIMBALYUK,TSURUSAKI,TUCKEY,TULLOCH,TUREK,TURKEWITZ,TURNER,UDAGEDARA,UPTON,UREN,URWIN,VAJJHALA,VALENZUELA,VAN DRIEL,VASANTHAKUMAR,VASUDEVAN,VATANDOUST,VAUX,VE,VENTER,VERKADE,VERRILLS,VICKERS,VINCENT,VISVADER,VO,VOHRALIK,VOSKOBOINIK,VRIELINK,WAI,WAKE,WALIA,WALKER,WALKER,WALKER,WALLACE,WALLIS,WALSH,WALSHE,WANG,WANG,WANG,WARD,WATSON,WATTERS,WEBSTER,WEEKS,WEGENER,WEIL,WEISS,WEST,WHELAN,WHELAN,WHELAN,WHISSTOCK,WHITELAW,WHITTY,WIDAGDO,WILCE,WILEY,WILKINS,WILKINSON,WILKINSON-WHITE,WILLEMS-JONES,WILLIAMS,WILLIAMS,WILLIAMS,WILLIS,WILLOWS,WILSON,WILSON,WILSON,WILSON,WILTON,WINZOR,WONG,WONG,WONG,WOODCOCK,WOODS,WOOKEY,WOOTTEN,WRIGHT,WUBBEN,WUN,WYATT,XIE,YANG,YANG,YANG,YAP,YEOH,YEOMAN,YIP,YOUNG,YUAN,YUET-YIN KOK,ZACCHI,ZADOORIAN,ZENKER,ZHANG,ZHANG,ZHANG,ZHAO,ZHONG,ZHOU,ZULKEFLI,ZUPAN";
  let asbmblist = asbmb.split(",");
  const list = asbmblist.map((author) => author.toLowerCase());
  console.log("thrid" + typeof list[2]);
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
      if (idx === lastAuthors.length - 1)
        console.log("asbab" + JSON.stringify(asbmbPapers));
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
