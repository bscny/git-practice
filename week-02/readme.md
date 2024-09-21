# Week Two Assaign Part A

## 安裝的 nodejs 版本

	我安裝的是v20.17.0 LTS，至於為什麼呢? 很簡單:
	1. 老師上課說偶數版本會較為完善，較少嘗試的新功能，換句話說較少bug發生機率
	2. LTS就擺在那，我完全沒有印象我此生在下載東西時有跳過LTS版本的經驗
	3. 最新的LTS

## nvm是啥
	
	node version manager, 顧名思義是管控當前nodejs版本的工具，在下載nodejs之前要先裝nvm，在以後nodejs推出新版本時(假設是第x版)，只要下
	```
	nvm install x
	```
	就可以了。

## npm是啥

	node package manager, 顧名思義是管理大大小小跟nodejs相關插件(工具包)的工具，在下載nodejs時會根據nodejs的下載版本自動下載相容的npm版本，就跟python的pip一樣，開源、免費，換句話說，工程師的福音。當然，npm下載東西時也有相對應的指令格式
	```
	npm install <package>
	```
