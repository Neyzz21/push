const _0x1fffe3=_0x22d3;(function(_0xed1850,_0x28110e){const _0x52b4d7=_0x22d3,_0x11d10a=_0xed1850();while(!![]){try{const _0x366f1a=-parseInt(_0x52b4d7(0x20c))/0x1+-parseInt(_0x52b4d7(0x213))/0x2+parseInt(_0x52b4d7(0x1d9))/0x3+parseInt(_0x52b4d7(0x1dc))/0x4*(-parseInt(_0x52b4d7(0x1f6))/0x5)+parseInt(_0x52b4d7(0x1ff))/0x6*(-parseInt(_0x52b4d7(0x22e))/0x7)+-parseInt(_0x52b4d7(0x1de))/0x8+-parseInt(_0x52b4d7(0x1c2))/0x9*(-parseInt(_0x52b4d7(0x1f3))/0xa);if(_0x366f1a===_0x28110e)break;else _0x11d10a['push'](_0x11d10a['shift']());}catch(_0x3dd092){_0x11d10a['push'](_0x11d10a['shift']());}}}(_0x3c58,0xb8a68),require('./settings'));function _0x22d3(_0x599a60,_0x72ffbd){const _0x3c5897=_0x3c58();return _0x22d3=function(_0x22d3dc,_0x104e9d){_0x22d3dc=_0x22d3dc-0x1bd;let _0x23eed7=_0x3c5897[_0x22d3dc];return _0x23eed7;},_0x22d3(_0x599a60,_0x72ffbd);}const {default:xdconnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x1fffe3(0x22d)),{state}=useSingleFileAuthState(_0x1fffe3(0x21a)),pino=require(_0x1fffe3(0x1d3)),{Boom}=require('@hapi/boom'),fs=require('fs'),chalk=require(_0x1fffe3(0x1e4)),figlet=require('figlet'),FileType=require(_0x1fffe3(0x217)),path=require(_0x1fffe3(0x1df)),PhoneNumber=require(_0x1fffe3(0x202)),{color,bgcolor,mycolor}=require(_0x1fffe3(0x216)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x1fffe3(0x230)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x1fffe3(0x203)),store=makeInMemoryStore({'logger':pino()['child']({'level':_0x1fffe3(0x1ec),'stream':_0x1fffe3(0x234)})});async function startxd(){const _0xcd85de=_0x1fffe3;let {version:_0x24b36b,isLatest:_0x5c5c14}=await fetchLatestBaileysVersion();const _0x179cef=xdconnect({'logger':pino({'level':'silent'}),'printQRInTerminal':!![],'browser':[_0xcd85de(0x1c9),_0xcd85de(0x1d7),_0xcd85de(0x23f)],'auth':state,'version':_0x24b36b});return store[_0xcd85de(0x1ca)](_0x179cef['ev']),console[_0xcd85de(0x1fd)](color(figlet[_0xcd85de(0x21e)](_0xcd85de(0x1cc),{'font':_0xcd85de(0x1fb),'horizontalLayout':'default','vertivalLayout':'default','width':0x50,'whitespaceBreak':![]}),_0xcd85de(0x1f5))),_0x179cef['ev']['on'](_0xcd85de(0x225),async _0x4e1740=>{const _0x30e1eb=_0xcd85de;try{m=_0x4e1740['messages'][0x0];if(!m[_0x30e1eb(0x228)])return;m[_0x30e1eb(0x228)]=Object[_0x30e1eb(0x1d0)](m['message'])[0x0]==='ephemeralMessage'?m[_0x30e1eb(0x228)][_0x30e1eb(0x1e7)][_0x30e1eb(0x228)]:m[_0x30e1eb(0x228)];if(m[_0x30e1eb(0x1ed)]&&m['key'][_0x30e1eb(0x226)]===_0x30e1eb(0x1f2))return;if(!_0x179cef[_0x30e1eb(0x210)]&&!m[_0x30e1eb(0x1ed)]['fromMe']&&_0x4e1740['type']===_0x30e1eb(0x215))return;if(m['key']['id']['startsWith'](_0x30e1eb(0x1ce))&&m[_0x30e1eb(0x1ed)]['id'][_0x30e1eb(0x1fa)]===0x10)return;m=smsg(_0x179cef,m,store),require(_0x30e1eb(0x1e0))(_0x179cef,m,_0x4e1740,store);}catch(_0x45cf46){console[_0x30e1eb(0x1fd)](_0x45cf46);}}),_0x179cef[_0xcd85de(0x232)]=_0x9f575d=>{const _0x46cf02=_0xcd85de;if(!_0x9f575d)return _0x9f575d;if(/:\d+@/gi['test'](_0x9f575d)){let _0x1477c4=jidDecode(_0x9f575d)||{};return _0x1477c4[_0x46cf02(0x238)]&&_0x1477c4[_0x46cf02(0x220)]&&_0x1477c4[_0x46cf02(0x238)]+'@'+_0x1477c4[_0x46cf02(0x220)]||_0x9f575d;}else return _0x9f575d;},_0x179cef['ev']['on'](_0xcd85de(0x1ea),_0x45a843=>{const _0x3bfbc8=_0xcd85de;for(let _0x1517ff of _0x45a843){let _0xcd840a=_0x179cef[_0x3bfbc8(0x232)](_0x1517ff['id']);if(store&&store[_0x3bfbc8(0x23e)])store[_0x3bfbc8(0x23e)][_0xcd840a]={'id':_0xcd840a,'name':_0x1517ff['notify']};}}),_0x179cef[_0xcd85de(0x207)]=(_0x16137f,_0x1b48dc=![])=>{const _0xae9b3b=_0xcd85de;id=_0x179cef['decodeJid'](_0x16137f),_0x1b48dc=_0x179cef[_0xae9b3b(0x23b)]||_0x1b48dc;let _0x23ea80;if(id[_0xae9b3b(0x1e8)](_0xae9b3b(0x222)))return new Promise(async _0x203cd0=>{const _0x32a9e7=_0xae9b3b;_0x23ea80=store[_0x32a9e7(0x23e)][id]||{};if(!(_0x23ea80[_0x32a9e7(0x224)]||_0x23ea80['subject']))_0x23ea80=_0x179cef[_0x32a9e7(0x22b)](id)||{};_0x203cd0(_0x23ea80[_0x32a9e7(0x224)]||_0x23ea80[_0x32a9e7(0x1e2)]||PhoneNumber('+'+id[_0x32a9e7(0x1e6)](_0x32a9e7(0x239),''))[_0x32a9e7(0x236)](_0x32a9e7(0x1d1)));});else _0x23ea80=id===_0xae9b3b(0x221)?{'id':id,'name':_0xae9b3b(0x1c0)}:id===_0x179cef[_0xae9b3b(0x232)](_0x179cef[_0xae9b3b(0x238)]['id'])?_0x179cef[_0xae9b3b(0x238)]:store[_0xae9b3b(0x23e)][id]||{};return(_0x1b48dc?'':_0x23ea80[_0xae9b3b(0x224)])||_0x23ea80[_0xae9b3b(0x1e2)]||_0x23ea80[_0xae9b3b(0x212)]||PhoneNumber('+'+_0x16137f[_0xae9b3b(0x1e6)](_0xae9b3b(0x239),''))[_0xae9b3b(0x236)](_0xae9b3b(0x1d1));},_0x179cef[_0xcd85de(0x20d)]=_0x2eacff=>{const _0x450f02=_0xcd85de;return _0x179cef[_0x450f02(0x1d6)]({'tag':'iq','attrs':{'to':'@s.whatsapp.net','type':'set','xmlns':'status'},'content':[{'tag':_0x450f02(0x240),'attrs':{},'content':Buffer['from'](_0x2eacff,'utf-8')}]}),_0x2eacff;},_0x179cef[_0xcd85de(0x210)]=!![],_0x179cef['serializeM']=_0x4b4d39=>smsg(_0x179cef,_0x4b4d39,store),_0x179cef['ev']['on'](_0xcd85de(0x211),_0x2e8cec=>{const _0x390e6e=_0xcd85de,{connection:_0x504019,lastDisconnect:_0x263f0a}=_0x2e8cec;if(_0x504019===_0x390e6e(0x1f4))_0x263f0a[_0x390e6e(0x21c)]?.[_0x390e6e(0x1cf)]?.[_0x390e6e(0x229)]!==DisconnectReason[_0x390e6e(0x1f9)]?startxd():'';else{if(_0x504019===_0x390e6e(0x1e3))console[_0x390e6e(0x1fd)](_0x2e8cec);}}),_0x179cef[_0xcd85de(0x1cd)]=async(_0x32c102,_0x390942='',_0x54fd10='',_0x301b86=[],_0x146bc5={})=>{const _0x54c29a=_0xcd85de;let _0x54006f=await prepareWAMessageMedia({'video':thumb,'gifPlayback':!![]},{'upload':_0x179cef['waUploadToServer']});const _0x404a7e=generateWAMessageFromContent(m[_0x54c29a(0x200)],proto[_0x54c29a(0x1bf)][_0x54c29a(0x21b)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x54006f[_0x54c29a(0x22a)],'hydratedContentText':_0x390942,'hydratedFooterText':_0x54fd10,'hydratedButtons':_0x301b86}}}),_0x146bc5);_0x179cef['relayMessage'](_0x32c102,_0x404a7e[_0x54c29a(0x228)],{'messageId':_0x404a7e['key']['id']});},_0x179cef[_0xcd85de(0x20f)]=async(_0x5b08bd,_0x1c74d0='',_0x515256='',_0x27a9d7,_0xb3107e=[],_0x21652b={})=>{const _0x413d1d=_0xcd85de;let _0x2c1d11=await prepareWAMessageMedia({'image':_0x27a9d7},{'upload':_0x179cef[_0x413d1d(0x1d4)]});var _0x474fe1=generateWAMessageFromContent(m[_0x413d1d(0x200)],proto[_0x413d1d(0x1bf)][_0x413d1d(0x21b)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x2c1d11['imageMessage'],'hydratedContentText':_0x1c74d0,'hydratedFooterText':_0x515256,'hydratedButtons':_0xb3107e}}}),_0x21652b);_0x179cef[_0x413d1d(0x1c3)](_0x5b08bd,_0x474fe1[_0x413d1d(0x228)],{'messageId':_0x474fe1[_0x413d1d(0x1ed)]['id']});},_0x179cef['send5ButVid']=async(_0x27a3db,_0x45d0c7='',_0x14919c='',_0x326a36,_0x570a4e=[],_0x15cf55={})=>{const _0x143b2f=_0xcd85de;let _0x28f679=await prepareWAMessageMedia({'video':_0x326a36},{'upload':_0x179cef[_0x143b2f(0x1d4)]});var _0x327821=generateWAMessageFromContent(m[_0x143b2f(0x200)],proto[_0x143b2f(0x1bf)][_0x143b2f(0x21b)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x28f679[_0x143b2f(0x22a)],'hydratedContentText':_0x45d0c7,'hydratedFooterText':_0x14919c,'hydratedButtons':_0x570a4e}}}),_0x15cf55);_0x179cef[_0x143b2f(0x1c3)](_0x27a3db,_0x327821[_0x143b2f(0x228)],{'messageId':_0x327821[_0x143b2f(0x1ed)]['id']});},_0x179cef[_0xcd85de(0x1be)]=async(_0x5cbbe8,_0x379547='',_0x20c9cf='',_0x4e216d,_0x447ffb=[],_0x2df3fd={})=>{const _0x38663f=_0xcd85de;var _0x4a5f85=generateWAMessageFromContent(m[_0x38663f(0x200)],proto['Message'][_0x38663f(0x21b)]({'templateMessage':{'hydratedTemplate':{'hydratedContentText':_0x379547,'locationMessage':{'jpegThumbnail':_0x4e216d},'hydratedFooterText':_0x20c9cf,'hydratedButtons':_0x447ffb}}}),_0x2df3fd);_0x179cef[_0x38663f(0x1c3)](_0x5cbbe8,_0x4a5f85['message'],{'messageId':_0x4a5f85[_0x38663f(0x1ed)]['id']});},_0x179cef[_0xcd85de(0x1c7)]=async(_0x5c45de,_0x55d9ea='',_0xf0c5d='',_0x4e1801='',_0x3b69e1='',_0xd4f047=[],_0x418c04={})=>{const _0x57126c=_0xcd85de;var _0x29798c=generateWAMessageFromContent(m[_0x57126c(0x200)],proto[_0x57126c(0x1bf)][_0x57126c(0x21b)]({'listMessage':{'title':_0x55d9ea,'description':_0xf0c5d,'buttonText':_0x4e1801,'footerText':_0x3b69e1,'listType':_0x57126c(0x22c),'sections':_0xd4f047,'listType':0x1}}),_0x418c04);_0x179cef[_0x57126c(0x1c3)](_0x5c45de,_0x29798c['message'],{'messageId':_0x29798c[_0x57126c(0x1ed)]['id']});},_0x179cef[_0xcd85de(0x1d8)]=(_0x461ead,_0x266ad5=[],_0x5e9b7c,_0x1e1a88,_0x58e1cc='',_0x792a2={})=>{let _0x29a5c7={'text':_0x5e9b7c,'footer':_0x1e1a88,'buttons':_0x266ad5,'headerType':0x2,..._0x792a2};_0x179cef['sendMessage'](_0x461ead,_0x29a5c7,{'quoted':_0x58e1cc,..._0x792a2});},_0x179cef['sendButMessage']=async(_0x1c309d,_0x35219b,_0x394b33,_0x17a335=[],_0x53f1ef)=>{let _0x18a877={'text':_0x35219b,'footer':_0x394b33,'buttons':_0x17a335,'headerType':0x1};return _0x179cef['sendMessage'](_0x1c309d,_0x18a877,{'quoted':_0x53f1ef});},_0x179cef['parseMention']=(_0x48d3b0='')=>{const _0x33f553=_0xcd85de;return[..._0x48d3b0['matchAll'](/@([0-9]{5,16}|0)/g)]['map'](_0x1e5212=>_0x1e5212[0x1]+_0x33f553(0x239));},_0x179cef['sendText']=(_0x44b9cb,_0x30ddb1,_0x3738cf='',_0x2bd117)=>_0x179cef[_0xcd85de(0x218)](_0x44b9cb,{'text':_0x30ddb1,..._0x2bd117},{'quoted':_0x3738cf}),_0x179cef[_0xcd85de(0x209)]=async(_0x5ab5dd,_0x2f97e3,_0x577e53='',_0x522c17='',_0x320142)=>{const _0x3b7c3b=_0xcd85de;let _0x21d09a=Buffer[_0x3b7c3b(0x201)](_0x2f97e3)?_0x2f97e3:/^data:.*?\/.*?;base64,/i[_0x3b7c3b(0x1e1)](_0x2f97e3)?Buffer['from'](_0x2f97e3[_0x3b7c3b(0x1db)]`,`[0x1],'base64'):/^https?:\/\//[_0x3b7c3b(0x1e1)](_0x2f97e3)?await await getBuffer(_0x2f97e3):fs[_0x3b7c3b(0x231)](_0x2f97e3)?fs[_0x3b7c3b(0x1c6)](_0x2f97e3):Buffer['alloc'](0x0);return await _0x179cef[_0x3b7c3b(0x218)](_0x5ab5dd,{'image':_0x21d09a,'caption':_0x577e53,..._0x320142},{'quoted':_0x522c17});},_0x179cef['sendVideo']=async(_0x4bce4e,_0x2f2e3c,_0x1d0d1a='',_0xcd5483='',_0x4b95df=![],_0x58bb75)=>{const _0x57847c=_0xcd85de;let _0x30287a=Buffer['isBuffer'](_0x2f2e3c)?_0x2f2e3c:/^data:.*?\/.*?;base64,/i[_0x57847c(0x1e1)](_0x2f2e3c)?Buffer[_0x57847c(0x1eb)](_0x2f2e3c[_0x57847c(0x1db)]`,`[0x1],_0x57847c(0x1e9)):/^https?:\/\//['test'](_0x2f2e3c)?await await getBuffer(_0x2f2e3c):fs[_0x57847c(0x231)](_0x2f2e3c)?fs[_0x57847c(0x1c6)](_0x2f2e3c):Buffer['alloc'](0x0);return await _0x179cef[_0x57847c(0x218)](_0x4bce4e,{'video':_0x30287a,'caption':_0x1d0d1a,'gifPlayback':_0x4b95df,..._0x58bb75},{'quoted':_0xcd5483});},_0x179cef[_0xcd85de(0x1d2)]=async(_0x1fb043,_0x162e40,_0x172edf='',_0x5d8040=![],_0x55db33)=>{const _0x11fd1d=_0xcd85de;let _0x46be3b=Buffer[_0x11fd1d(0x201)](_0x162e40)?_0x162e40:/^data:.*?\/.*?;base64,/i[_0x11fd1d(0x1e1)](_0x162e40)?Buffer['from'](_0x162e40[_0x11fd1d(0x1db)]`,`[0x1],_0x11fd1d(0x1e9)):/^https?:\/\//[_0x11fd1d(0x1e1)](_0x162e40)?await await getBuffer(_0x162e40):fs['existsSync'](_0x162e40)?fs['readFileSync'](_0x162e40):Buffer[_0x11fd1d(0x1f0)](0x0);return await _0x179cef['sendMessage'](_0x1fb043,{'audio':_0x46be3b,'ptt':_0x5d8040,..._0x55db33},{'quoted':_0x172edf});},_0x179cef['sendTextWithMentions']=async(_0x26f36a,_0x24c301,_0x132050,_0x24dcd9={})=>_0x179cef[_0xcd85de(0x218)](_0x26f36a,{'text':_0x24c301,'contextInfo':{'mentionedJid':[..._0x24c301['matchAll'](/@(\d{0,16})/g)][_0xcd85de(0x23c)](_0x2f12bd=>_0x2f12bd[0x1]+_0xcd85de(0x239))},..._0x24dcd9},{'quoted':_0x132050}),_0x179cef[_0xcd85de(0x233)]=async(_0x25a3f3,_0x5cbf44,_0x22a695,_0x4c323c={})=>{const _0x1fceef=_0xcd85de;let _0x28f45d=Buffer[_0x1fceef(0x201)](_0x5cbf44)?_0x5cbf44:/^data:.*?\/.*?;base64,/i[_0x1fceef(0x1e1)](_0x5cbf44)?Buffer[_0x1fceef(0x1eb)](_0x5cbf44[_0x1fceef(0x1db)]`,`[0x1],'base64'):/^https?:\/\//['test'](_0x5cbf44)?await await getBuffer(_0x5cbf44):fs[_0x1fceef(0x231)](_0x5cbf44)?fs[_0x1fceef(0x1c6)](_0x5cbf44):Buffer[_0x1fceef(0x1f0)](0x0),_0x22961c;return _0x4c323c&&(_0x4c323c[_0x1fceef(0x20b)]||_0x4c323c['author'])?_0x22961c=await writeExifImg(_0x28f45d,_0x4c323c):_0x22961c=await imageToWebp(_0x28f45d),await _0x179cef['sendMessage'](_0x25a3f3,{'sticker':{'url':_0x22961c},..._0x4c323c},{'quoted':_0x22a695}),_0x22961c;},_0x179cef[_0xcd85de(0x23d)]=async(_0x58dc02,_0x4ccba6,_0x46d8bb,_0x217e8b={})=>{const _0x21b82b=_0xcd85de;let _0x5cd708=Buffer[_0x21b82b(0x201)](_0x4ccba6)?_0x4ccba6:/^data:.*?\/.*?;base64,/i[_0x21b82b(0x1e1)](_0x4ccba6)?Buffer[_0x21b82b(0x1eb)](_0x4ccba6[_0x21b82b(0x1db)]`,`[0x1],_0x21b82b(0x1e9)):/^https?:\/\//[_0x21b82b(0x1e1)](_0x4ccba6)?await await getBuffer(_0x4ccba6):fs[_0x21b82b(0x231)](_0x4ccba6)?fs[_0x21b82b(0x1c6)](_0x4ccba6):Buffer[_0x21b82b(0x1f0)](0x0),_0x4bad6c;return _0x217e8b&&(_0x217e8b[_0x21b82b(0x20b)]||_0x217e8b[_0x21b82b(0x1c4)])?_0x4bad6c=await writeExifVid(_0x5cd708,_0x217e8b):_0x4bad6c=await videoToWebp(_0x5cd708),await _0x179cef['sendMessage'](_0x58dc02,{'sticker':{'url':_0x4bad6c},..._0x217e8b},{'quoted':_0x46d8bb}),_0x4bad6c;},_0x179cef['downloadAndSaveMediaMessage']=async(_0x236c76,_0x4f39be,_0x5e2c09=!![])=>{const _0x3010b9=_0xcd85de;let _0x45c54b=_0x236c76[_0x3010b9(0x1ef)]?_0x236c76['msg']:_0x236c76,_0x4fa166=(_0x236c76[_0x3010b9(0x1ef)]||_0x236c76)[_0x3010b9(0x1c8)]||'',_0x2c3225=_0x236c76[_0x3010b9(0x20a)]?_0x236c76['mtype'][_0x3010b9(0x1e6)](/Message/gi,''):_0x4fa166[_0x3010b9(0x1db)]('/')[0x0];const _0x415adf=await downloadContentFromMessage(_0x45c54b,_0x2c3225);let _0x236184=Buffer[_0x3010b9(0x1eb)]([]);for await(const _0x488064 of _0x415adf){_0x236184=Buffer[_0x3010b9(0x1c1)]([_0x236184,_0x488064]);}let _0x506abb=await FileType[_0x3010b9(0x1f7)](_0x236184);return trueFileName=_0x5e2c09?_0x4f39be+'.'+_0x506abb[_0x3010b9(0x206)]:_0x4f39be,await fs[_0x3010b9(0x219)](trueFileName,_0x236184),trueFileName;},_0x179cef[_0xcd85de(0x1da)]=async _0x2aa112=>{const _0x151cee=_0xcd85de;let _0x2182ed=(_0x2aa112[_0x151cee(0x1ef)]||_0x2aa112)[_0x151cee(0x1c8)]||'',_0x2adac0=_0x2aa112[_0x151cee(0x20a)]?_0x2aa112[_0x151cee(0x20a)][_0x151cee(0x1e6)](/Message/gi,''):_0x2182ed[_0x151cee(0x1db)]('/')[0x0];const _0x4216a5=await downloadContentFromMessage(_0x2aa112,_0x2adac0);let _0xe92d16=Buffer[_0x151cee(0x1eb)]([]);for await(const _0x24be3f of _0x4216a5){_0xe92d16=Buffer['concat']([_0xe92d16,_0x24be3f]);}return _0xe92d16;},_0x179cef[_0xcd85de(0x1f8)]=async(_0x5192fe,_0x19f62d,_0x4f2875=![],_0xb07474={})=>{const _0xa3b219=_0xcd85de;let _0xae2dc2;_0xb07474['readViewOnce']&&(_0x19f62d[_0xa3b219(0x228)]=_0x19f62d[_0xa3b219(0x228)]&&_0x19f62d[_0xa3b219(0x228)][_0xa3b219(0x1e7)]&&_0x19f62d[_0xa3b219(0x228)][_0xa3b219(0x1e7)][_0xa3b219(0x228)]?_0x19f62d['message'][_0xa3b219(0x1e7)]['message']:_0x19f62d[_0xa3b219(0x228)]||undefined,_0xae2dc2=Object[_0xa3b219(0x1d0)](_0x19f62d[_0xa3b219(0x228)][_0xa3b219(0x1d5)][_0xa3b219(0x228)])[0x0],delete(_0x19f62d[_0xa3b219(0x228)]&&_0x19f62d[_0xa3b219(0x228)][_0xa3b219(0x1dd)]?_0x19f62d[_0xa3b219(0x228)]['ignore']:_0x19f62d[_0xa3b219(0x228)]||undefined),delete _0x19f62d[_0xa3b219(0x228)][_0xa3b219(0x1d5)]['message'][_0xae2dc2][_0xa3b219(0x1c5)],_0x19f62d['message']={..._0x19f62d[_0xa3b219(0x228)][_0xa3b219(0x1d5)][_0xa3b219(0x228)]});let _0x580b37=Object[_0xa3b219(0x1d0)](_0x19f62d[_0xa3b219(0x228)])[0x0],_0x4f8ca2=await generateForwardMessageContent(_0x19f62d,_0x4f2875),_0x146c63=Object[_0xa3b219(0x1d0)](_0x4f8ca2)[0x0],_0x29479b={};if(_0x580b37!=_0xa3b219(0x1fc))_0x29479b=_0x19f62d[_0xa3b219(0x228)][_0x580b37][_0xa3b219(0x227)];_0x4f8ca2[_0x146c63][_0xa3b219(0x227)]={..._0x29479b,..._0x4f8ca2[_0x146c63][_0xa3b219(0x227)]};const _0x11e572=await generateWAMessageFromContent(_0x5192fe,_0x4f8ca2,_0xb07474?{..._0x4f8ca2[_0x146c63],..._0xb07474,..._0xb07474[_0xa3b219(0x227)]?{'contextInfo':{..._0x4f8ca2[_0x146c63]['contextInfo'],..._0xb07474[_0xa3b219(0x227)]}}:{}}:{});return await _0x179cef[_0xa3b219(0x1c3)](_0x5192fe,_0x11e572['message'],{'messageId':_0x11e572[_0xa3b219(0x1ed)]['id']}),_0x11e572;},_0x179cef[_0xcd85de(0x21d)]=(_0x1f147f,_0x1cbd77,_0x52ab53='',_0x1de0d1=_0x179cef[_0xcd85de(0x238)]['id'],_0x4c0069={})=>{const _0x22e947=_0xcd85de;let _0x46b57d=Object[_0x22e947(0x1d0)](_0x1cbd77[_0x22e947(0x228)])[0x0],_0x11e23b=_0x46b57d===_0x22e947(0x1e7);_0x11e23b&&(_0x46b57d=Object[_0x22e947(0x1d0)](_0x1cbd77[_0x22e947(0x228)][_0x22e947(0x1e7)][_0x22e947(0x228)])[0x0]);let _0x5bf4c0=_0x11e23b?_0x1cbd77['message'][_0x22e947(0x1e7)][_0x22e947(0x228)]:_0x1cbd77[_0x22e947(0x228)],_0x110866=_0x5bf4c0[_0x46b57d];if(typeof _0x110866===_0x22e947(0x1e5))_0x5bf4c0[_0x46b57d]=_0x52ab53||_0x110866;else{if(_0x110866[_0x22e947(0x22f)])_0x110866[_0x22e947(0x22f)]=_0x52ab53||_0x110866[_0x22e947(0x22f)];else{if(_0x110866[_0x22e947(0x204)])_0x110866['text']=_0x52ab53||_0x110866[_0x22e947(0x204)];}}if(typeof _0x110866!==_0x22e947(0x1e5))_0x5bf4c0[_0x46b57d]={..._0x110866,..._0x4c0069};if(_0x1cbd77[_0x22e947(0x1ed)]['participant'])_0x1de0d1=_0x1cbd77['key']['participant']=_0x1de0d1||_0x1cbd77['key']['participant'];else{if(_0x1cbd77[_0x22e947(0x1ed)][_0x22e947(0x1fe)])_0x1de0d1=_0x1cbd77[_0x22e947(0x1ed)]['participant']=_0x1de0d1||_0x1cbd77['key'][_0x22e947(0x1fe)];}if(_0x1cbd77['key'][_0x22e947(0x226)]['includes'](_0x22e947(0x239)))_0x1de0d1=_0x1de0d1||_0x1cbd77['key']['remoteJid'];else{if(_0x1cbd77[_0x22e947(0x1ed)][_0x22e947(0x226)][_0x22e947(0x1ee)](_0x22e947(0x23a)))_0x1de0d1=_0x1de0d1||_0x1cbd77[_0x22e947(0x1ed)]['remoteJid'];}return _0x1cbd77[_0x22e947(0x1ed)][_0x22e947(0x226)]=_0x1f147f,_0x1cbd77[_0x22e947(0x1ed)][_0x22e947(0x1bd)]=_0x1de0d1===_0x179cef['user']['id'],proto[_0x22e947(0x21f)][_0x22e947(0x21b)](_0x1cbd77);},_0x179cef[_0xcd85de(0x223)]=async(_0x52e3c2,_0x3a6bb0)=>{const _0x4f6c30=_0xcd85de;let _0x47b81c,_0x254653=Buffer[_0x4f6c30(0x201)](_0x52e3c2)?_0x52e3c2:/^data:.*?\/.*?;base64,/i[_0x4f6c30(0x1e1)](_0x52e3c2)?Buffer['from'](_0x52e3c2[_0x4f6c30(0x1db)]`,`[0x1],_0x4f6c30(0x1e9)):/^https?:\/\//['test'](_0x52e3c2)?await(_0x47b81c=await getBuffer(_0x52e3c2)):fs[_0x4f6c30(0x231)](_0x52e3c2)?(filename=_0x52e3c2,fs[_0x4f6c30(0x1c6)](_0x52e3c2)):typeof _0x52e3c2==='string'?_0x52e3c2:Buffer[_0x4f6c30(0x1f0)](0x0),_0x4c3808=await FileType[_0x4f6c30(0x1f7)](_0x254653)||{'mime':'application/octet-stream','ext':_0x4f6c30(0x1cb)};filename=path[_0x4f6c30(0x235)](__filename,_0x4f6c30(0x214)+new Date()*0x1+'.'+_0x4c3808[_0x4f6c30(0x206)]);if(_0x254653&&_0x3a6bb0)fs[_0x4f6c30(0x205)]['writeFile'](filename,_0x254653);return{'res':_0x47b81c,'filename':filename,'size':await getSizeMedia(_0x254653),..._0x4c3808,'data':_0x254653};},_0x179cef;}startxd();function _0x3c58(){const _0x47d5f3=['concat','36dytptQ','relayMessage','author','viewOnce','readFileSync','sendList','mimetype','PUSH\x20KONTAK\x20BOT','bind','.bin','PUSH-KONTAK','send5ButGif','BAE5','output','keys','international','sendAudio','pino','waUploadToServer','viewOnceMessage','query','Safari','sendButtonText','143388okrZGJ','downloadMediaMessage','split','266676HlztId','ignore','8863696nHGVYs','path','../js/xd','test','subject','open','chalk','string','replace','ephemeralMessage','endsWith','base64','contacts.update','from','silent','key','includes','msg','alloc','resolve','status@broadcast','12418930eGyUsR','close','blue','65QBLgjo','fromBuffer','copyNForward','loggedOut','length','Standard','conversation','log','participant','3816arLBhW','chat','isBuffer','awesome-phonenumber','../js/lib/functions','text','promises','ext','getName','cache','sendImage','mtype','packname','873141deThXX','setStatus','Update\x20File\x20Terbaru\x20','send5ButImg','public','connection.update','verifiedName','2819936BPQBRE','../src/','notify','../js/lib/color','file-type','sendMessage','writeFileSync','./sessi.json','fromObject','error','cMod','textSync','WebMessageInfo','server','0@s.whatsapp.net','@g.us','getFile','name','messages.upsert','remoteJid','contextInfo','message','statusCode','videoMessage','groupMetadata','SELECT','@adiwajshing/baileys','14jPXOEQ','caption','../js/lib/exif','existsSync','decodeJid','sendImageAsSticker','store','join','getNumber','yellowBright','user','@s.whatsapp.net','@broadcast','withoutContact','map','sendVideoAsSticker','contacts','1.0.0','status','fromMe','send5ButLoc','Message','WhatsApp'];_0x3c58=function(){return _0x47d5f3;};return _0x3c58();}let file=require[_0x1fffe3(0x1f1)](__filename);fs['watchFile'](file,()=>{const _0x1def1c=_0x1fffe3;fs['unwatchFile'](file),console[_0x1def1c(0x1fd)](chalk[_0x1def1c(0x237)](_0x1def1c(0x20e)+__filename)),delete require[_0x1def1c(0x208)][file],require(file);});