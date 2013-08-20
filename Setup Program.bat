@ECHO OFF
node C:\OtherProject\tambola-75\common\_reload.js
C:\OtherProject\tambola-75\backup\mongoimport --db bingo75 --collection users --file users.json
C:\OtherProject\tambola-75\backup\mongoimport --db bingo75 --collection grant --file grant.json