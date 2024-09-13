- blob object
	在git add完檔案之後，會產生一個blob物件。這個物件名稱是將檔案的內容丟進hash function產生出的hash值，內容則存著檔案的**內容**。
- tree objrct
	在commit完進度之後，會產生一個tree物件。這個物件名稱是當前commit時的hash值，內容則有現有的blob object和每個blob object相對應的檔案**名稱**。
- commit object
	Commit object顧名思義是進行commit後會出現的一個物件，他紀錄了一些有關每次commit需要有的資訊，包括tree, author, committer, 以及commit message。

> https://medium.com/@flyotlin/%E4%BB%80%E9%BA%BC%E6%98%AFgit%E7%89%A9%E4%BB%B6-ebbeb3b22f9c

- branch
	branch顧名思義是樹枝，在多人開發時，為了不一直解決conflict然後增加可用主程式的穩定性，就像一棵樹一樣，展開許多可能的枝條，等開發完成，再合併回主枝條。
- head
	一個特殊指標指向該branch的某個版本(commit點)，通常預設是最新的commit。
