taskkill /F /IM node.exe
cd %userprofile%
cd Documents
del /s /f /q sistema-crud
git clone https://github.com/professor-salinet/202500176-prog-web.git --branch=30-09-25-sistema-crud ./sistema-crud
cd sistema-crud
npm i -y
node servidor.js
