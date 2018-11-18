export const monthList = ['January','February','March','April','May','June','July', 'August','September','October','November','December']

export const generateDayList = month => {
  const dayList = []
  if (!month) {
    for (let i = 1; i < 31; i++) {
      dayList.push('' + i)
    }
    return dayList
  }

  let lengthOfMonth = 30;
  switch (month) {
    case 'January':
      lengthOfMonth = 31
    case 'February':
      lengthOfMonth = 28
    case 'March':
      lengthOfMonth = 31
    case 'April':
      lengthOfMonth = 30
    case 'May':
      lengthOfMonth = 31
    case 'June':
      lengthOfMonth = 30
    case 'July':
      lengthOfMonth = 31
    case 'August':
      lengthOfMonth = 30
    case 'September':
      lengthOfMonth = 31
    case 'October':
      lengthOfMonth = 31
    case 'November':
      lengthOfMonth = 30
    case 'December':
      lengthOfMonth = 31
    default:
      lengthOfMonth = 30
  }
  for (let i = 1; i <= lengthOfMonth; i++) {
    dayList.push('' + i)
  }
  return dayList
}

export const yearList = [
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
]


export const hourList = ['09', '10', '11', '12', '13', '14', '15', '16', '17']
export const minuteList = ['00', '15', '30', '45']
export const currentYearList = ['2018', '2019']


export const formatDate = (d) => {
  const date = new Date(d)
  return (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear()
}