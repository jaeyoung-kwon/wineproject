import re
import requests
from bs4 import BeautifulSoup

BASE_URL = "https://www.wine21.com/13_search/wine_list.html"

def get_page(page_url):

    page = requests.get(page_url)
    soup = BeautifulSoup(page.content, "html.parser")

    return soup

soup = get_page(BASE_URL)

#wine_category.csv생성
# 'id','wine_name', 'contry', 'state'
k = 168955
name_list = []
contry = []
state = []
for i in range(1000):
    BASE_URL = f"https://www.wine21.com/13_search/wine_view.html?Idx={k-i}&lq=LIST"
    soup, page = get_page(BASE_URL)
    name_list.append(soup.select_one("body > section > div.inner > div.clear > div.wine-top-right > dl > dt").text)
    contry.append(soup.select_one("body > section > div.inner > div.clear > div.wine-top-right > div.bagde-box > p > span:nth-child(2)").text)
    try:
        state.append(soup.select_one("body > section > div.inner > div.clear > div.wine-top-right > div.bagde-box > p > span:nth-child(3)").text)
    except:
        state.append('.')

result = [] 
# result = ['wine_name', 'contry', 'state']
for i , k, j in zip(name_list,contry,state):
    result.append([i,k,j])


import csv
# csv파일 저장
with open('wine_category1.csv', 'w',newline="") as f:
    writer = csv.writer(f)
    for row in result:
        writer.writerow(row)
    
# wine.csv생성
# result = 'alcohol','sweet','acidity','wine_type','price,body'

k = 168955
result = []
for i in range(1000):
    BASE_URL = f"https://www.wine21.com/13_search/wine_view.html?Idx={k-i}&lq=LIST"
    soup, page = get_page(BASE_URL)
    a = len(soup.select("#detail > div > div > dl > dd"))
    # 알콜도수 가져오기
    for i in range(a):
        f = soup.select_one(f"#detail > div > div > dl:nth-child({a-i}) > dt").text
        if f == "알코올":
            alcohol = soup.select_one(f"#detail > div > div > dl:nth-child({a-i}) > dd").text.split("~")[0]
            break
    #당도 가져오기
    y = str(soup.select_one("body > section > div.inner > div.clear > div.wine-top-right > div.wine-components > ul > li:nth-child(1) > div"))
    sweet=len(y.split('=')[3:])
    #산도 가져오기
    ac = str(soup.select_one("body > section > div.inner > div.clear > div.wine-top-right > div.wine-components > ul > li:nth-child(2) > div"))
    acidity=len(ac.split('=')[3:])
    # 바디감 가져오기
    bd =  str(soup.select_one("body > section > div.inner > div.clear > div.wine-top-right > div.wine-components > ul > li:nth-child(2) > div"))
    body=len(bd.split('=')[3:])
    #종류 가져오기
    wt = soup.select_one("body > section > div.inner > div.clear > div.wine-top-right > div.bagde-box > p > span").text
    wine_type = wt
    #가격 가져오기
    price = soup.select_one("body > section > div.inner > div.clear > div.wine-top-right > p.wine-price>strong").text
    result.append([alcohol,sweet,acidity,wine_type,price,body])

import csv
# csv파일 저장
with open('wine1.csv', 'w',newline="") as f:
    writer = csv.writer(f)
    for row in result:
        writer.writerow(row)
