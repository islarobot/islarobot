touch /home/yago/Escritorio/islarobot

apt-get update

#read -p "install apache"

apt-get install nodejs nodejs-legacy --assume-yes

dpkg -l nodejs > /home/yago/Escritorio/apiTranz

apt-get install gnome-terminal --assume-yes

dpkg -l gnome-terminal > /home/yago/Escritorio/apiTranz

apt-get install npm --assume-yes

dpkg -l npm > /home/yago/Escritorio/apiTranz

apt-get install redis-server --assume-yes

dpkg -l redis-server > /home/yago/Escritorio/apiTranz

npm install request

npm install serialport