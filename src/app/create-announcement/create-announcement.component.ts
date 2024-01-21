import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  CheckboxControlValueAccessor,
  FormArray,
} from '@angular/forms';
import { carsInfoService } from '../canInfo.service';
@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.css'],
})
export class CreateAnnouncementComponent {
  locations: string[] = [
    'Tbilisi',
    'Kutaisi',
    'Batumi',
    'Poti',
    'Rustavi',
    'Rustavi Car Market',
    'CaucasusAuto Market',
    'Chkhorotsku',
    'Akhmeta',
    'Zestaphoni',
    'Borjomi',
    'Kaspi',
    'Sagarejo',
    'Akhaltsikhe',
    'Sokhumi',
    'Kobuleti',
    'Gurjaani',
    'Martvili',
    'Chiatura',
    'Dusheti',
    'Lagodekhi',
    'Telavi',
    'Mtskheta',
    'Tskhinvali',
    'Akhalkalaki',
    'Gori',
    'Khashuri',
    'Ambrolauri',
    'Ozurgeti',
    'Zugdidi',
    'Senaki',
    'Sighnaghi',
    'Kareli',
    'Marneuli',
    'Gardabani',
    'Samtredia',
    'Mestia',
    'Sachkhere',
    'Khobi',
    'Tianeti',
    'POTI',
    'BATUMI',
    'Kvareli',
    'Tkibuli',
    'Dedoplistskaro',
    'Oni',
    'Bolnisi',
    'Tskaltubo',
    'Tetritskaro',
    'Tianeti',
    'Kharagauli',
    'Tsalka',
    'Tsalenjikha',
    'Tserovani',
    'Lanchkhuti',
    'Sartichala',
    'Khoni',
    'Ninotsminda',
    'Aspindza',
    'Abasha',
    'Tsageri',
  ];
  locationsAbroad: string[] = [
    'USA',
    'Germany',
    'Japan',
    'Europe',
    'France',
    'Spain',
    'South Korea',
    'Russia',
    'Ireland',
    'Netherlands',
    'Italy',
    'Dubai',
    'England',
    'Other',
    'Ukraine',
    'China',
    'Canada',
    'Turkey',
    'Poland',
  ];
  Manufacturers: string[] = [
    'Arcfox',
    'Acura',
    'Aion',
    'Alfa Romeo',
    'AMC',
    'Aston Martin',
    'Audi',
    'Baic',
    'Beijing',
    'Bentley',
    'BMW',
    'Brilliance',
    'Bugatti',
    'Buick',
    'BYD',
    'Cadillac',
    'Changan',
    'Changfeng',
    'Chery',
    'Chevrolet',
    'Chrysler',
    'Citroen',
    'CPI',
    'Dacia',
    'Daewoo',
    'Daihatsu',
    'Datsun',
    'DM  Telai',
    'Dodge',
    'Dongfeng',
    'DS Automobiles',
    'Exeed',
    'FAW',
    'Ferrari',
    'Fiat',
    'Fisker',
    'Ford',
    'Fortschritt',
    'Foton',
    'GAZ',
    'Geely',
    'Genesis',
    'GMC',
    'Great wall',
    'Hafei',
    'Haval',
    'Hiphi',
    'Honda',
    'Hongqi',
    'Huawei',
    'Hummer',
    'Hyster',
    'Hyundai',
    'Infiniti',
    'Iran Khodro',
    'Isuzu',
    'Iveco',
    'JAC',
    'Jaguar',
    'Jeep',
    'Jetour',
    'Kama',
    'Karsan',
    'Kia',
    'Lamborghini',
    'Lancia',
    'Land Rover',
    'Leap Motor',
    'Lexus',
    'Lifan',
    'Lincoln',
    'Linde',
    'Lixiang',
    'Lonking',
    'Lotus',
    'LTI',
    'Maserati',
    'Maybach',
    'Mazda',
    'Mclaren',
    'Mercedes-Benz',
    'Mercury',
    'MG',
    'Mini',
    'Mitsubishi',
    'Mitsuoka',
    'Moskvich',
    'Neta',
    'Niewiadow',
    'NIO',
    'Nissan',
    'Opel',
    'Peugeot',
    'Pontiac',
    'Porsche',
    'Proton',
    'Renault',
    'Renault Samsung',
    'Roewe',
    'Rolls-Royce',
    'Rover',
    'Saab',
    'Saleen',
    'Saturn',
    'Scion',
    'Seat',
    'Skoda',
    'Skywell',
    'Smart',
    'Soueast',
    'Ssangyong',
    'Subaru',
    'Suzuki',
    'Tata',
    'Tesla',
    'Toyota',
    'UAZ',
    'VAZ',
    'Volkswagen',
    'Volvo',
    'Voyah',
    'Xingtai',
    'Xpeng',
    'YTO',
    "Yuanxin Energy's",
    'ZAZ',
    'Zeekr',
    'Zukida',
    'Zxauto',
  ];
  years: string[] = [
    '2024',
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
    '2007',
    '2006',
    '2005',
    '2004',
    '2003',
    '2002',
    '2001',
    '2000',
    '1999',
    '1998',
    '1997',
    '1996',
    '1995',
    '1994',
    '1993',
    '1992',
    '1991',
    '1990',
    '1989',
    '1988',
    '1987',
    '1986',
    '1985',
    '1984',
    '1983',
    '1982',
    '1981',
    '1980',
    '1979',
    '1978',
    '1977',
    '1976',
    '1975',
    '1974',
    '1973',
    '1972',
    '1971',
    '1970',
    '1969',
    '1968',
    '1967',
    '1966',
    '1965',
    '1964',
    '1963',
    '1962',
    '1961',
    '1960',
    '1959',
    '1958',
    '1957',
    '1956',
    '1955',
    '1954',
    '1953',
    '1952',
    '1951',
    '1950',
    '1949',
    '1948',
    '1947',
    '1946',
    '1945',
    '1944',
    '1943',
    '1942',
    '1941',
    '1940',
    '1939',
    '1938',
    '1937',
    '1936',
    '1935',
    '1934',
    '1933',
    '1932',
    '1931',
    '1930',
    '1929',
    '1928',
    '1927',
    '1926',
    '1925',
    '1924',
    '1923',
    '1922',
    '1921',
    '1920',
    '1919',
    '1918',
    '1917',
    '1916',
    '1915',
    '1914',
    '1913',
    '1912',
    '1911',
    '1910',
    '1909',
    '1908',
    '1907',
    '1906',
    '1905',
    '1904',
    '1903',
    '1902',
    '1901',
    '1900',
  ];
  colors: string[] = [
    'White',
    'Black',
    'Silver',
    'Grey',
    'Red',
    'Blue',
    'Yellow',
    'Green',
    'Orange',
    'Violet',
    'Pink',
    'Beige',
    'cadetblue',
    'blueviolet',
    'burlywood',
    'Brown',
  ];
  carInfo: FormGroup;
  filteredLocations: string[] = [];
  filteredAbLocations: string[] = [];
  filteredManufacturers: string[] = [];
  filteredYear: string[] = [];
  filteredColor: string[] = [];
  searchText: string = '';
  searchTextAb: string = '';
  isImage: boolean = true;
  ngOnInit() {
    
    const curUser = localStorage.getItem('currentUser');
    if (curUser) {
      const curUserJson = JSON.parse(curUser);
      this.carInfo.get('publishersId')?.setValue(curUserJson.id);

    }
    this.carInfo.get('valute')?.setValue('USD');
    this.filteredLocations = this.locations;
    this.locations.sort((a, b) => a.localeCompare(b));
    this.filteredAbLocations = this.locationsAbroad;
    this.locationsAbroad.sort((a, b) => a.localeCompare(b));
    this.filteredManufacturers = this.Manufacturers;
    this.filteredManufacturers.sort((a, b) => a.localeCompare(b));
    this.filteredYear = this.years;
    this.filteredColor = this.colors;
    this.filteredColor.sort((a, b) => a.localeCompare(b));
  }
  constructor(
    private router: Router,
    private carsInfoService: carsInfoService,
    private fb: FormBuilder
  ) { 
    this.carInfo = this.fb.group({
      location: new FormControl('', [Validators.required]),
      Manufacturer: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      description: new FormControl(''),
      valute: new FormControl(''),
      imgs: this.fb.array([], [Validators.minLength(1)]),
      status: new FormControl('active'),
      publishersId: new FormControl(Number(localStorage.getItem('id'))),
    });
  }
  //*******************************************************************************************************************
  //**************************************************   locations   **************************************************
  //*******************************************************************************************************************
  updateNameLoc(selectedLi: string) {
    document.querySelectorAll('.allWrappers').forEach((wrapper) => {
      wrapper.classList.remove('active');
    });
    this.carInfo.get('location')?.setValue(selectedLi);
  }

  showVariantLoc() {
    document.querySelectorAll('.allWrappers').forEach((wrapper) => {
      if (wrapper != document.querySelector('.wrapper-location')) {
        wrapper.classList.remove('active');
      }
    });

    document.querySelector('.wrapper-location')?.classList.toggle('active');
  }

  filterLocations(value: string) {
    this.searchText = value;
    const startsWithSearchText = this.locations.filter((location) =>
      location.toLowerCase().startsWith(this.searchText.toLowerCase())
    );

    const containsSearchText = this.locations.filter(
      (location) =>
        location.toLowerCase().includes(this.searchText.toLowerCase()) &&
        !location.toLowerCase().startsWith(this.searchText.toLowerCase())
    );
    this.filteredLocations = startsWithSearchText.concat(containsSearchText);
  }
  filterAbroadLocations(value: string) {
    this.searchTextAb = value;
    const startsWithSearchTextAb = this.locationsAbroad.filter((location) =>
      location.toLowerCase().startsWith(this.searchTextAb.toLowerCase())
    );

    const containsSearchTextAd = this.locationsAbroad.filter(
      (location) =>
        location.toLowerCase().includes(this.searchTextAb.toLowerCase()) &&
        !location.toLowerCase().startsWith(this.searchTextAb.toLowerCase())
    );
    this.filteredAbLocations =
      startsWithSearchTextAb.concat(containsSearchTextAd);
  }
  //***********************************************************************************************************************
  //**************************************************   Manufacturers   **************************************************
  //***********************************************************************************************************************
  showVariantManu() {
    document.querySelectorAll('.allWrappers').forEach((wrapper) => {
      if (wrapper != document.querySelector('.wrapper-manufact')) {
        wrapper.classList.remove('active');
      }
    });
    document.querySelector('.wrapper-manufact')?.classList.toggle('active');
  }
  updateNameManu(selectedLi: string) {
    document.querySelectorAll('.allWrappers').forEach((wrapper) => {
      wrapper.classList.remove('active');
    });
    this.carInfo.get('Manufacturer')?.setValue(selectedLi);
  }
  filterManufacturers(value: string) {
    this.searchText = value;
    const startsWithSearchText = this.Manufacturers.filter((Manufacturer) =>
      Manufacturer.toLowerCase().startsWith(this.searchText.toLowerCase())
    );

    const containsSearchText = this.Manufacturers.filter(
      (Manufacturer) =>
        Manufacturer.toLowerCase().includes(this.searchText.toLowerCase()) &&
        !Manufacturer.toLowerCase().startsWith(this.searchText.toLowerCase())
    );
    this.filteredManufacturers =
      startsWithSearchText.concat(containsSearchText);
  }
  //***********************************************************************************************************************
  //**************************************************   Year   ***********************************************************
  //***********************************************************************************************************************
  showVariantYear() {
    document.querySelectorAll('.allWrappers').forEach((wrapper) => {
      if (wrapper != document.querySelector('.wrapper-year')) {
        wrapper.classList.remove('active');
      }
    });
    document.querySelector('.wrapper-year')?.classList.toggle('active');
  }
  updateNameYear(selectedLi: string) {
    document.querySelectorAll('.allWrappers').forEach((wrapper) => {
      wrapper.classList.remove('active');
    });
    this.carInfo.get('year')?.setValue(selectedLi);
  }
  filterYear(value: string) {
    this.searchText = value;
    const startsWithSearchText = this.years.filter((year) =>
      year.toLowerCase().startsWith(this.searchText.toLowerCase())
    );

    const containsSearchText = this.years.filter((year) => {
      year.toLowerCase().includes(this.searchText.toLowerCase()) &&
        !year.toLowerCase().startsWith(this.searchText.toLowerCase());
    });
    this.filteredYear = startsWithSearchText.concat(containsSearchText);
  }
  //***********************************************************************************************************************
  //**************************************************   Year   ***********************************************************
  //***********************************************************************************************************************
  showVariantColor() {
    document.querySelectorAll('.allWrappers').forEach((wrapper) => {
      if (wrapper != document.querySelector('.wrapper-color')) {
        wrapper.classList.remove('active');
      }
    });
    document.querySelector('.wrapper-color')?.classList.toggle('active');
  }
  updateNameColor(selectedLi: string) {
    document.querySelectorAll('.allWrappers').forEach((wrapper) => {
      wrapper.classList.remove('active');
    });
    this.carInfo.get('color')?.setValue(selectedLi);
  }
  filterColor(value: string) {
    this.searchText = value;
    const startsWithSearchText = this.colors.filter((color) =>
      color.toLowerCase().startsWith(this.searchText.toLowerCase())
    );

    const containsSearchText = this.colors.filter((color) => {
      color.toLowerCase().includes(this.searchText.toLowerCase()) &&
        !color.toLowerCase().startsWith(this.searchText.toLowerCase());
    });
    this.filteredColor = startsWithSearchText.concat(containsSearchText);
  }
  //***********************************************************************************************************************
  //**************************************************   price btns   *****************************************************
  //***********************************************************************************************************************
  changePriceValute(e: boolean) {
    if (e) {
      document.querySelector('.usd-btn')?.classList.add('active');
      document.querySelector('.gel-btn')?.classList.remove('active');
      this.carInfo.get('valute')?.setValue('USD');
    } else {
      document.querySelector('.usd-btn')?.classList.remove('active');
      document.querySelector('.gel-btn')?.classList.add('active');
      this.carInfo.get('valute')?.setValue('GEL');
    }
  }
  //***********************************************************************************************************************
  //**************************************************   img link   **************************************************
  //***********************************************************************************************************************
  get imgs() {
    return this.carInfo.get('imgs') as FormArray;
  }
  addImageLink(link: string, imgsLinkInp: HTMLInputElement) {
    this.imgs.push(this.fb.control(link, Validators.required));
    imgsLinkInp.value = '';
    const imageLinks = this.imgs.value;
    console.log('Array of image links:', imageLinks);
  }
  //***********************************************************************************************************************
  //**************************************************   submit btn   *****************************************************
  //***********************************************************************************************************************
  SubmitBtn() {
    if (this.carInfo.valid && this.imgs.length !== 0) {
      const carInfoData = this.carInfo.value;

      this.carsInfoService.addcarsInfo(carInfoData).subscribe(
        (response) => {
          this.carInfo.reset();
        },
        (error) => {
          console.error('Error adding car information:', error);
        }
      );
      this.router.navigate(['/home']);
    }else{
      console.log(this.carInfo.value)
    }
  }
}
