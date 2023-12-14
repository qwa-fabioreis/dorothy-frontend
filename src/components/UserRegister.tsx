function UserRegister() {
    return ( 
        <div>
            <h3>
            Cadastro de usuários
            </h3>
            Nome completo: <input type="text" /><br />
            Nome usuário: <input type="text" /><br />
            Email: <input type="email"/><br />
            Senha: <input type="password" /><br />
            Repetir senha: <input type="password" /><br />
            <button type="submit">Cadastrar</button>
        </div>
     );
}

export default UserRegister;