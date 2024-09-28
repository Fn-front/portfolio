export const AuthFormComponent = ({
  children,
  mt,
}: Readonly<{
  children: React.ReactNode;
  mt: string;
}>) => {
  return (
    <div className={`p_auth_form_component ${mt != '' ? 'u_mt' + mt : ''} `}>
      {children}
    </div>
  );
};

export default AuthFormComponent;
