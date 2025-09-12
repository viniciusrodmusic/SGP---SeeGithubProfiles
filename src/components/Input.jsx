export default function Input({ onUsernameChange }) {


    return (
        <input onChange={ (e) => onUsernameChange(e.target.value)} className="bg-slate-700 rounded-lg border-2 border-slate-500 h-[40px] w-[20rem]" type="text" placeholder="Digite o nome do usuário Github">
        </input>
    )
}