type Functionality = {
    id: number;
    title: string;
    description: string;
    code: string;
}

export const funtionalities:Functionality[] = [
    {
        id: 1,
        title: "Funcionalidades do Portifólio",
        description: "O desenvolvimento do meu portifólio foi um projeto por si só, onde testei a versão mais recente do NextJs com Tailwind CSS. Abaixo você pode ler a documentação de algumas das funcionalidades que foram implementadas.",
        code:""
    },
    {
        id: 2,
        title: "Tema Light/Dark",
        description: "Utilizei o LocalStorage, hook useState e useEffect para salvar a preferência de tema do usuário. Primeiro realizo uma validação caso haja valor do tema armazenado pelo usuário, caso não exista, uso como validação o tema do sistema operacional",
        code:"if (localStorage.theme === 'light') {\n" +
        "      setLight();\n" +
        "} else if (localStorage.theme === 'dark'\n" +
        " || ( window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n" +
        "      setDark();\n" +
        "} else {\n" +
        "      setLight();\n" +
        "}\n\n" + 
        "const [darkTheme, setDarkTheme] = useState(false)\n" +
        "const setLight:()=> void = () => {\n" +
        "   setDarkTheme(false)\n" +
        "   localStorage.setItem(\'theme\', \'light\')\n" +
        "   document.documentElement.classList.remove(\'dark\')\n" +
          "}\n" +
        "const setDark:()=> void = () => {\n" +
        "   localStorage.setItem(\'theme\', \'dark\')\n" +
        "   setDarkTheme(true)\n" +
        "   document.documentElement.classList.add(\'dark\')\n" +
          "}\n" +
            "const changeTheme:()=> void =()=>{\n" +
          "   if(localStorage.getItem(\'theme\') === \'light\'){\n" +
            "       setDark();\n" +
            "   } else {\n" +
            "       setLight();\n" +
            "   }\n" +
          "}\n"
    },
    {
        id: 3,
        title: "Utilidade no CSS",
        description: "O Tailwind CSS trás uma grande praticidade com suas classes," +
        "porém o conjunto de classes CSS de alguns elementos pode ficar um tanto extenso."+
        "Abaixo podemos ver algumas definiões padrão para os textos e também um exemplo de calsse para o botão, que será usada várias vezes na página.",
        code:'@tailwind base;\n'+
        '@tailwind components;\n'+
        '@tailwind utilities;\n'+
        '\n'+
        '@layer base {\n'+
        '  h1 {\n'+
        '    @apply text-5xl md:text-6xl font-bold py-4;\n'+
        '  }\n'+
        '\n'+
        '  h2 {\n'+
        '    @apply text-4xl md:text-5xl font-bold py-4;\n'+
        '  }\n'+
        '\n'+
        '  h3 {\n'+
        '    @apply text-3xl md:text-4xl font-bold py-4;\n'+
        '  }\n'+
        '\n'+
        '  h4 {\n'+
        '    @apply text-2xl md:text-3xl font-bold py-4;\n'+
        '  }\n'+
        '\n'+
        '  h5 {\n'+
        '    @apply text-xl md:text-2xl font-bold py-2;\n'+
        '  }\n'+
        '\n'+
        '  h6 {\n'+
        '    @apply text-xl font-bold py-2;\n'+
        '  }\n'+
        '\n'+
        '  p{\n'+
        '    @apply font-medium  text-slate-600 dark:text-slate-400;\n'+
        '  }\n'+
        '}\n'+
        '\n'+
        '@layer components {\n'+
        '.primary-button {\n'+
        '    @apply transition bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:shadow-violet-500/60\n'+
        '    hover:to-blue-700 dark:bg-gradient-to-r dark:from-purple-600 dark:to-blue-600 hover:shadow-lg dark:hover:shadow-violet-600/30\n'+
        '    dark:hover:from-purple-500 dark:hover:to-blue-500 inline-flex items-center justify-center px-6 py-2 font-semibold leading-6 text-sm  text-white rounded-md\n'+
        '    shadow-violet-800/50 hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full md:w-fit; \n'+
        '  }\n'+
        '}\n'
    },
    {
        id: 4,
        title: "Alert Modal",
        description: "O modal de mensagem pode ser útil em diversas telas de um aplicativo,"+
        "para evitar repetições fiz um componente que recebe os parâmetros para controlar seu comportamento e ser exibida uma mensagem customizável de sucesso ou falha.",
        code:'"use client"\n'+
        'import { Fragment } from "react"\n'+
        'import { Dialog, Transition } from "@headlessui/react";\n'+
        'import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";\n'+
        '\n'+
        'interface Modal {\n'+
        '    open: boolean,\n'+
        '    close: (param:boolean)=>void,\n'+
        '    success: boolean,\n'+
        '    message: string\n'+
        '}\n'+
        'const AlertModal:React.FC<Modal> =({open, close, success, message}) => {\n'+
        '\n'+
        '    return(\n'+
        '        <Transition show={open} >\n'+
        '            <Dialog onClose={() => close(false)}>\n'+
        '                <Transition.Child\n'+
        '                as={Fragment}\n'+
        '                enter="ease-out duration-300"\n'+
        '                enterFrom="opacity-0"\n'+
        '                enterTo="opacity-100"\n'+
        '                leave="ease-in duration-200"\n'+
        '                leaveFrom="opacity-100"\n'+
        '                leaveTo="opacity-0"\n'+
        '                >\n'+
        '                <div className="fixed inset-0 bg-black/90 z-[10]" />\n'+
        '                </Transition.Child>\n'+
        '                <Transition.Child\n'+
        '                as={Fragment}\n'+
        '                enter="ease-out duration-300"\n'+
        '                enterFrom="opacity-0 scale-95"\n'+
        '                enterTo="opacity-100 scale-100"\n'+
        '                leave="ease-in duration-200"\n'+
        '                leaveFrom="opacity-100 scale-100"\n'+
        '                leaveTo="opacity-0 scale-95"\n'+
        '                >\n'+
        '                    <div className="fixed inset-0 flex items-center justify-center p-4 z-[11]">    \n'+
        '                        <Dialog.Panel className="w-full max-w-md rounded text-base p-4 bg-card">\n'+
        '                           { success ? <h4 className="text-emerald-500 text-center">Sucesso</h4> :  <h4 className="text-rose-500 text-center">Erro</h4> }\n'+
        '                            { success ? <FaCheckCircle className="h-10 w-10 mx-auto mb-6 text-emerald-500" /> : <FaExclamationCircle className="h-10 w-10 mx-auto mb-6 text-rose-500" />}\n'+
        '                            <p className="text-center mb-4">{message}</p>\n'+
        '                            <div className="text-center mb-2">\n'+
        '                                <button className="w-full md:w-fit rounded-md bg-sky-600 py-2 md:py-1 px-6 text-white transition duration-500 hover:bg-sky-800"\n'+
        '                                 onClick={()=> close(false)}>\n'+
        '                                    <span className="select-none">\n'+
        '                                        Ok\n'+
        '                                    </span>\n'+
        '                                </button>\n'+
        '                            </div>      \n'+
        '                        </Dialog.Panel>\n'+
        '                    </div>\n'+
        '                </Transition.Child>\n'+
        '            </Dialog>\n'+
        '            </Transition>\n'+
        '    )\n'+
        '}\n'+
        '\n'+
        'export default AlertModal;'
    },
    {
        id: 5,
        title: "Custom Icons",
        description: "Alguns ícones que eu precisava não estavam presentes no Hero Icons nem React Icons,"+
        "então precisei adiquirir e editar os svgs de outras fontes. Para facilitar a estilização criei componentes referentes a cada ícone que recebem as classes css. ",
        code:'import { CustomIcon } from "@/app/types/customIcon";\n'+
        '\n'+
        'const TypescriptIcon:React.FC<CustomIcon> =({className})=> {\n'+
        '\n'+
        '    return (\n'+
        '        <svg id="adobe-xd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>\n'+
        '            <path d="m42,1H6c-2.209,0-4,1.791-4,4v38c0,2.209,1.791,4,4,4h36c2.209,0,4-1.791,\n'+
        '             4-4V5c0-2.209-1.791-4-4-4Zm-13.265,25.464h-5.618v15.99h-3.987v-15.99h-5.618v-1.761l.032.011v-1.772l7.563\n'+
        '             -.032c4.159,0,7.584.011,7.584.043.043.022.043.81.043,1.783v1.729Zm14.629,12.706c-.691,1.804-2.377,\n'+
        '             3.025-4.786,3.425-.756.13-2.485.108-3.295-.032-1.729-.324-3.382-1.188-4.397-2.301-.4-.432-1.167-1.588-1.124\n'+
        '             -1.664l.411-.259,1.621-.94,1.221-.713.281.378c.357.562,1.156,1.318,1.621,1.577,1.405.724,3.284.627,4.214-.216.4\n'+
        '             -.367.573-.756.573-1.297,0-.497-.076-.724-.324-1.102-.346-.475-1.037-.864-2.982-1.729-2.236-.951-3.187-1.556-4.073-2.485\n'+
        '             -.508-.562-.972-1.437-1.188-2.161-.162-.627-.216-2.161-.065-2.777.465-2.161,2.096-3.673,4.43-4.106.756-.151,\n'+
        '              2.539-.086,3.284.108l-.022.022c1.102.259,1.945.756,2.701,1.545.4.432.994,1.188,1.037,1.383,0,.065-1.869,1.329-3.004,2.031\n'+
        '             -.043.032-.216-.151-.389-.432-.562-.799-1.134-1.145-2.031-1.21-1.297-.086-2.161.594-2.161,1.729,0,.346.065.54.194.821.292.594.832.951\n'+
        '             ,2.507,1.685,3.09,1.329,4.43,2.204,5.24,3.457.918,1.404,1.124,3.609.508,5.262Z" fill="currentColor"/>\n'+
        '        </svg>\n'+
        '    )\n'+
        '}\n'+
        '\n'+
        'export default TypescriptIcon;'
    },
    {
      id: 6,
      title: "Envio de Email",
      description: "Utilizei o nodeMailer para implementar o envio de e-mail do meu formulário de contato com o SMTP do gmail.",
      code:'import type { NextApiRequest, NextApiResponse } from \'next\'\n'+
      'import { Email, ResponseData } from \'../../model/dataTypes\';\n'+
      '\n'+
      '\n'+
      'const nodemailer = require(\'nodemailer\')\n'+
      '\n'+
      'export default async function handler(\n'+
      '  req:NextApiRequest,\n'+
      '  res:NextApiResponse<ResponseData>\n'+
      '  ){\n'+
      '    const emailData:Email = req.body;\n'+
      '    let transporter = nodemailer.createTransport({\n'+
      '        host:\'smtp.gmail.com\',\n'+
      '        port: 465,\n'+
      '        secure:true,\n'+
      '        auth:{\n'+
      '            user: process.env.USER_EMAIL,\n'+
      '            pass: process.env.USER_PASSWORD\n'+
      '        },\n'+
      '    });\n'+
      '\n'+
      '    try {\n'+
      '      await transporter.sendMail({\n'+
      '        from: `${emailData.name}" - " <${emailData.email}>`, \n'+
      '        to: process.env.USER_EMAIL,\n'+
      '        replyTo: emailData.email, \n'+
      '        subject: emailData.subject, \n'+
      '        text: emailData.message, \n'+
      '        html: `<b>${emailData.name}</b><br /> ${emailData.message}`, \n'+
      '      });\n'+
      '\n'+
      '      return res.status(200).json({message:"E-mail enviado com sucessso!"})\n'+
      '    } catch (error) {\n'+
      '      return res.status(400).json({message:"Falha no envio de e-mail, tente novamente mais tarde."})\n'+
      '    }\n'+
      '           \n'+
      '}\n'+
      '\n'+
      '\n'+
      ''
  },
]