import './UserRegister.css'

function UserRegister() {
    return (
        <div>
            <h3>
                Cadastro de usuários
            </h3>
            <form action="" className='formulario' >
                <label htmlFor="nCompleto">Nome completo:</label>
                <input type="text" id='nCompleto' name='nomecompleto' />

                <label htmlFor="nUsuario">Nome usuário:</label>
                <input type="text" id='nUsuario' name='nomeusuario' />

                <label htmlFor="email">Email:</label>
                <input type="email" id='email' name='email' />

                <label htmlFor="senha">Senha:</label>
                <input type="password" id='senha' name='senha' />

                <label htmlFor="rSenha">Repetir senha:</label>
                <input type="password" id='rSenha' name='repetesenha' />

                <button type="submit">Cadastrar</button>
            </form>


        </div>
    );
}

export default UserRegister;