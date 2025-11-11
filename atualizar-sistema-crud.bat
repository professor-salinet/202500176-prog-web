echo "Encerrando o node"
taskkill /F /IM node.exe

echo "Acessando diretorio do usuario na maquina"
cd %userprofile%
cd Documents

echo "Excluindo diretorio antigo"
del /s /f /q 202500176-prog-web-30-09-25-sistema-crud

echo "Fazendo download do repositorio"
curl -L -o sistema-crud.zip https://github.com/professor-salinet/202500176-prog-web/archive/refs/heads/30-09-25-sistema-crud.zip

echo "Descompactando arquivo baixado"
tar -xf sistema-crud.zip -C .

echo "Acessando diretorio novo"
cd 202500176-prog-web-30-09-25-sistema-crud

echo "Instalando dependencias"
call npm i -y

echo "Executando node servidor.js"
node servidor.js

echo "Fim da execucao"
pause
