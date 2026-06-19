import fs from 'fs'

export function getConfig(env){

return JSON.parse(
fs.readFileSync(`config/${env}.json`,'utf8')
)

}