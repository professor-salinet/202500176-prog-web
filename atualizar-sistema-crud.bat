echo "Encerrando o node\n"
taskkill /F /IM node.exe

echo "Acessando diretorio do usuario na maquina\n"
cd %userprofile%
cd Documents

echo "Excluindo diretorio antigo\n"
del /s /f /q 202500176-prog-web-30-09-25-sistema-crud

echo "Fazendo download do repositorio\n"
curl -L -o sistema-crud.zip https://github.com/professor-salinet/202500176-prog-web/archive/refs/heads/30-09-25-sistema-crud.zip

echo "Descompactando arquivo baixado\n"
tar -xf sistema-crud.zip -C .

echo "Acessando diretorio novo\n"
cd 202500176-prog-web-30-09-25-sistema-crud

echo "Instalando dependencias\n"
call npm i -y

echo "Executando vscode no diretorio atualizado do sistema\n"
call code .

echo "Abrindo localhost no navegador\n"
"C:\Program Files\Google\Chrome\Application\chrome.exe" --incognito http://localhost

echo "Executando node servidor.js\n"
call node servidor.js

echo "Fim da execucao"
pause
