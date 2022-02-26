/*Kalian bisa ganti ini rulesnya
ingat !! yang ${botname} jangan di ganti
biarin aja sans ntar bakalan keluar nama bot luh kok
*/
const rules = (prefix, botname) => { 
return `*_RULES BOT_*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

──「 *${botname}* 」──`
}
exports.rules = rules