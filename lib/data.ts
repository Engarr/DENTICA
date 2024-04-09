import bonding from '@/public/bonding.jpg';
import dentistry from '@/public/dentistry.jpg';
import implant from '@/public/implant.jpg';
import prosthetics from '@/public/prosthetics.jpg';
import radiology from '@/public/radiology.jpg';
import surgery from '@/public/surgery.jpg';
import teethWhitening from '@/public/teeth-whitening.jpg';
import stomatologicalCuration from '@/public/stomatological_curation.jpg';
import rootCanalTreatment from '@/public/root-canal-treatment-of-the-tooth.jpg';

export const offerData = [
  { title: 'Stomatologia zachowawcza', text: 'leczenie próchnicy' },
  { title: 'Radiologia', text: 'Prześwietlanie zębów' },
  { title: 'Endoncja', text: 'Leczenie kanałowe' },
  { title: 'Chirurgia', text: 'Usuwanie zębów' },
  { title: 'Bonding', text: 'Estetyczne licówki kompozytowe' },
  { title: 'Protetyka', text: 'Uzupełnienia braków zębów' },
  { title: 'Profilaktyka', text: 'Higienizacja' },
  { title: 'Wybielanie', text: 'Rozjaśnianie koloru zębów' },
  { title: 'Implanty', text: 'Korony, mosty, protezy' },
] as const;
export const offerNavData = [
  {
    title: 'Stomatologia zachowawcza',
    hash: '/zabiegi/stomatologia zachowawcza',
  },
  { title: 'Radiologia', hash: '/zabiegi/radiologia' },
  { title: 'Endoncja', hash: '/zabiegi/endoncja' },
  { title: 'Chirurgia', hash: '/zabiegi/chirurgia' },
  { title: 'Bonding', hash: '/zabiegi/bonding' },
  { title: 'Protetyka', hash: '/zabiegi/protetyka' },
  { title: 'Profilaktyka', hash: '/zabiegi/profilaktyka' },
  { title: 'Wybielanie', hash: '/zabiegi/wybielanie' },
  { title: 'Implanty', hash: '/zabiegi/implanty' },
];
export const DUMMY_DATA = [
  {
    title: 'Stomatologia zachowawcza',
    id: 'stomatologia zachowawcza',
    desc: [
      'Stomatologia zachowawcza, nazywana również stomatologią ogólną, zajmuje się zapobieganiem powstawania próchnicy oraz jej skutecznym leczeniem.',
      'Obecnie wizyty związane z leczeniem próchnicy, przy użyciu bezpiecznych metod znieczulenia, mogą stać się całkowicie bezbolesne i bezstresowe. Podczas leczenia zachowawczego zastosowanie nowoczesnych narzędzi i materiałów pozwala na perfekcyjne odtworzenie kształtu i koloru korony zęba.',
      'Najczęstszymi zabiegami są: leczenie wczesnej próchnicy, leczenie ubytków o różnym stopniu zaawansowania próchnicy, leczenie pourazowe.',
    ],
    img: dentistry,
  },

  {
    title: 'Endoncja',
    id: 'endoncja',
    desc: [
      'Endodoncja, znana również jako leczenie kanałowe, jest jednym z obszarów stomatologii konserwatywnej. Stosuje się ją w przypadku stanów zapalnych, martwiczych miazgi lub uszkodzeń, takich jak złamania lub pęknięcia zębów.',
      'Procedura polega na dokładnym oczyszczeniu wnętrza zęba poprzez usuwanie martwej lub zakażonej tkanki oraz dezynfekcję kanałów korzeniowych. Następnie kanały te są wypełniane specjalnym materiałem w celu zapewnienia trwałej szczelności. Kontrolę poprawności wypełnienia przeprowadza się zazwyczaj przy użyciu zdjęć rentgenowskich.',
      'Dzięki leczeniu kanałowemu możliwe jest przedłużenie trwałości naturalnych zębów, co przyczynia się do zachowania zdrowia jamy ustnej na dłuższą metę.',
    ],
    img: rootCanalTreatment,
  },
  {
    title: 'Protetyka',
    id: 'protetyka',
    desc: [
      'Protetyka stomatologiczna koncentruje się na diagnozowaniu i leczeniu problemów związanych z brakiem zębów. Jej celem jest przywracanie naturalnych warunków zgryzu po utracie zębów, zarówno w sposób naturalny, jak i w przypadku poważnych uszkodzeń.',
      'Indywidualne podejście do pacjenta oraz uwzględnienie jego oczekiwań są kluczowe, ponieważ każdy jest inny. Lekarz proponuje najlepsze rozwiązanie, biorąc pod uwagę zarówno aspekty funkcjonalne, jak i estetyczne, dbając o dobre samopoczucie pacjenta.',
      'W zależności od stanu uzębienia stosuje się różne rodzaje uzupełnień. Do uzupełnień stałych należą korony i mosty, które są trwale osadzone w jamie ustnej. Natomiast uzupełnienia ruchome obejmują protezy, które mogą być łatwo zdejmowane i zakładane przez pacjenta.',
    ],
    img: prosthetics,
  },
  {
    title: 'Bonding',
    id: 'bonding',
    desc: [
      'To metoda odbudowy zębów, która jest szybka, małoinwazyjna i nie wymaga szlifowania. Polega na nałożeniu cienkiej warstwy kompozytu wykonanego z żywicy na ząb. Jest stosowana do naprawy uszkodzonych powierzchni zębów oraz poprawy estetyki, szczególnie w przypadku przebarwień.',
    ],
    img: bonding,
  },
  {
    title: 'Implanty',
    id: 'implanty',
    desc: [
      'Implant dentystyczny to niewielka śruba z tytanu, która jest umieszczana chirurgicznie bezpośrednio w kości szczęki. Pełni on rolę zastępującą utracony ząb lub jego korzeń, służąc jako podstawa dla korony lub innych konstrukcji protetycznych, takich jak mosty lub protezy.',
      ,
      'Po wszczepieniu rozpoczyna się proces gojenia, trwający od 3 do 6 miesięcy, zwany osseointegracją. W jego trakcie kość ściśle zrasta się z implantem, co zapewnia jego solidne osadzenie.',
      'Po zakończeniu procesu gojenia, który może trwać od 3 do 6 miesięcy, można przystąpić do pracy protetycznej. Specjalny łącznik protetyczny jest przykręcany do implantu, a na nim montowana jest korona, mostek lub proteza. Wynik jest nie tylko funkcjonalny i trwały, ale także estetyczny.',
    ],
    img: implant,
  },
  {
    title: 'Wybielanie',
    id: 'wybielanie',
    desc: [
      'Wszyscy pragniemy mieć piękny, jasny uśmiech, a nowoczesna stomatologia oferuje nam tę możliwość.',
      ,
      'Wybielanie zębów to bezpieczny i bezbolesny sposób na usunięcie przebarwień i odzyskanie białego uśmiechu.',
      'Istnieje kilka metod wybielania. Jedną z nich jest wybielanie w gabinecie przy użyciu specjalnej lampy, a drugą popularną metodą jest wybielanie nakładkowe, które można wykonać w domu za pomocą specjalnych nakładek z żelem wybielającym. Efekt po wybielaniu jest imponujący i utrzymuje się przez długi czas.',
    ],
    img: teethWhitening,
  },
  {
    title: 'Profilaktyka',
    id: 'profilaktyka',
    desc: [
      'Głównym celem profilaktyki stomatologicznej jest unikanie chorób zębów i dziąseł poprzez utrzymanie odpowiedniej higieny jamy ustnej. Regularne wizyty kontrolne, zalecane idealnie co pół roku, są kluczowe do monitorowania stanu uzębienia. Podczas tych wizyt przeprowadza się zabiegi skalingu i piaskowania oraz fluoryzacji, które mają na celu poprawę kondycji zębów i zapobieganie próchnicy.',
    ],
    ul: {
      title: 'Metody:',
      li: [
        'Skaling to usuwanie kamienia nazębnego głównie z obszarów międzyzębowych i przy linii dziąseł za pomocą urządzenia wykorzystującego ultradźwięki.',
        'Piaskowanie to proces czyszczenia powierzchni zębów z osadu i plam przy użyciu wysokociśnieniowego strumienia drobnoziarnistego piasku.',
        'Polerowanie oznacza wygładzanie powierzchni zębów przy użyciu specjalnej pasty i szczoteczki z ruchem rotacyjnym.',
        'Higienizację powinniśmy wykonywać co najmniej raz w roku, by uniknąć nadmiernego powstawania złogów kamienia, które mogą powodować nieświeży oddech i krwawienie dziąseł.',
      ],
    },
    img: stomatologicalCuration,
  },
  {
    title: 'Chirurgia',
    id: 'chirurgia',
    desc: [
      'Chirurgia stomatologiczna specjalizuje się głównie w trudnych przypadkach ekstrakcji zębów. Oprócz tego przeprowadza również różnorodne zabiegi w obrębie jamy ustnej oraz przygotowawcze procedury związane z ortodoncją, protetyką i implantologią.',
      'W chirurgii stomatologicznej większość zabiegów przeprowadza się przy użyciu znieczulenia miejscowego. Jest to korzystne, ponieważ eliminuje ból, jednocześnie umożliwiając zachowanie kontaktu z pacjentem.',
    ],
    img: surgery,
  },
  {
    title: 'Radiologia',
    id: 'radiologia',
    desc: [
      'Radiologia stomatologiczna jest używana do diagnozowania problemów zdrowotnych związanych ze zębami. Zazwyczaj wykonuje się prześwietlenie zęba przed leczeniem kanałowym lub usunięciem. Takie zdjęcia RTG są także przydatne dla pacjentów potrzebujących protez, umożliwiając dokładne planowanie leczenia stomatologicznego i protetycznego. To specjalizacja, która nie tylko pozwala obrazować pojedyncze zęby, ale również szczękę, kości, stawy oraz tkanki kostne. W stomatologii, zdjęcia RTG są powszechnie stosowanym narzędziem diagnostycznym.',
    ],
    ul: {
      title: 'Istnieją różne rodzaje badań radiologicznych zębów:',
      li: [
        'Badanie punktowe - to najmniej inwazyjne badanie RTG w stomatologii, umożliwiające bardzo dokładne zobrazowanie maksymalnie czterech zębów na raz.',
        'Badanie panoramiczne (panoramiczne zdjęcie rentgenowskie) - jest mniej szczegółowe od badania punktowego, ale obejmuje wszystkie zęby oraz struktury szczęki i żuchwy. Jest często wykonywane w przypadku planowania leczenia protetycznego lub innych zabiegów stomatologicznych wymagających szerszego zobrazowania jamy ustnej.',
      ],
    },
    img: radiology,
  },
];
export const priceData = [
  {
    title: 'Stomatologia zachowawcza',
    treatments: [
      {
        title: 'Badanie lekarskie, wizyta kontrolna, przegląd',
        price: 150,
      },
      {
        title: 'Wypełnienie ubytku',
        price: 250,
      },
      {
        title: 'Rekonstrukcja/odbudowa zęba',
        price: 380,
      },
      {
        title: 'Znieczulenie',
        price: 40,
      },
    ],
  },
  {
    title: 'Leczenie kanałowe',
    treatments: [
      {
        title: 'Leczenie kanału',
        price: 500,
      },
    ],
  },
  {
    title: 'Chirurgia',
    treatments: [
      {
        title: 'Usunięcie/ekstrakcja zęba nieskomplikowanie',
        price: 190,
      },
      {
        title: 'Usunięcie/ekstrakcja zęba chirurgiczn',
        price: 300,
      },
      {
        title: 'Usunięcie/ekstrakcja zęba zatrzymanego',
        price: 550,
      },
      {
        title: 'Usunięcie szwów założonych w innym gabinecie',
        price: 50,
      },
    ],
  },
  {
    title: 'Prześwietlenia',
    treatments: [
      {
        title: 'Wewnątrz ustne (pojedynczy ząb)',
        price: 40,
      },
      {
        title: 'Pantomograficzne',
        price: 100,
      },
    ],
  },
  {
    title: 'Profilaktyka stomatologiczna',
    treatments: [
      {
        title: 'Fluoryzacja lakierem fluorkowym',
        price: 40,
      },
      {
        title: 'Usunięcie kamienia/skaling',
        price: 150,
      },
      {
        title: 'Piaskowanie',
        price: 150,
      },
      {
        title:
          'Higienizacja kompleksowa (skaling + piaskowanie + polerowanie + fluoryzacja)',
        price: 250,
      },
    ],
  },
  {
    title: 'Protetyka',
    treatments: [
      {
        title: 'Korona (1 ząb)',
        price: 700,
      },
      {
        title: 'Licówka (1 ząb)',
        price: 650,
      },
      {
        title: 'Proteza całkowita',
        price: 1500,
      },
      {
        title: 'Proteza szkieletowa',
        price: 1700,
      },
    ],
  },
  {
    title: 'Implanty',
    treatments: [
      {
        title: 'Szablon chirurgiczny',
        price: 700,
      },
      {
        title: 'Lokator',
        price: 1450,
      },
      {
        title: 'Implantacja',
        price: 2200,
      },
      {
        title:
          'Augumentacja (uzupełnienie kości wokół implantu materiałem kościozastępczym)',
        price: 900,
      },
      {
        title: 'Odsłonięcie śruby zamykającej',
        price: 250,
      },
      {
        title: 'Korona na implancie',
        price: 1800,
      },
    ],
  },
  {
    title: 'Wybielanie',
    treatments: [
      {
        title: 'Wybielanie gabinetowe',
        price: 700,
      },
      {
        title: 'Wybielanie nakładkowe',
        price: 700,
      },
    ],
  },
];
