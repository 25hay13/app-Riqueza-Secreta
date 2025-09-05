import react, { useState } from 'react';
import {SafeAreaView, View, TouchableOpacity, StyleSheet, ScrollView, TextInput, Alert, TouchableNativeFeedback} from 'react-native';

export default function App(){
  const [pagina, setPagina] = useState('home'); 
  return(
    <SafeAreaView style={Styles.container}>
      <Header pagina={pagina} setPagina={setPagina}/>
      <ScrollView contentContainerStyle={styles.content}>
        {pagina === 'home' && <Home />}
        {pagina === 'sobre' && <Sobre />}
        {pagina === 'serviços' && <Servicos />}
        {pagina === 'contato' && <Contato />}
        </ScrollView>
        <Footer />
    </SafeAreaView>
  )
}     
function Header({pagina,setPagina}){
  return(
    <View style={ styles.Header}>
      <Text style={ styles.headerTitle}>Riquesa Secreta</Text>
      <View style={styles.nev}>
        {['home', 'sobre', 'servicos', 'contato'].map((p)=>(
          <TouchableOpacity
          key={p}
          style={[styles.navButton, pagina === p && atyles.navButtonActive]}
          onPress={() => setPagina (p)}
          >
            <text style={styles.navButtonText}>{p.charAt(0).toUpperCase() + p.slice(1)}</text>
          </TouchableOpacity>
        ))}
      </View>
    </View>    
  );
}

function Home() {
  return(
  <View style={styles.section}>
    <text style={styles.title}>Bem Vindos á nossa empresa</text>
    <Text> Transformamos sentimento em peças únicas</Text>
  </View>
  );
}

function Sobre() {
  return(
  <View style={styles.section}>
    <text style={styles.title}>Sobre nós</text>
    <Text> Fundada em 2020, somos uma empresa que transforma  setimentos em peças únicas</Text>
  </View>
  );
}

function Serviços() {
  return(
  <View style={styles.section}>
    <text style={styles.title}>Sobre nós</text>
    <Text> Atender a um publico que busca significado e elegancia.</Text>
    <text> Design exclusivo e personalizado.</text>
    <text> Embalegem sofistiacdas.</text>
  </View>
  );
}

function Contato (){
  const[nome, setNome] = React.useState('');
  const[email, setEmail] = React.useState('');
  const[mensagem, setMensagem] = React.useState('');

  function enviar () {
    if(!nome || !email || !mensagem) {
      Alert.alert('Erro','Por favor preencha todos os compos');
      return;
    }
    Alert.alert('Mensagem enviada',`Obrigado, ${nome}! Retornarmos em Breve.`);
      setNome('');
      setEmail('');
      setMensagem('');
 }

 return (
  <View style={styles.section}>
    <text style={ style.title}>Contato</text>
    <TextInpult
    style={style.inpult}
    planceholder ="Nome"
    value={nome}
    onChargeText={setNome}
    />
    <TextInpult
    style={style.inpult}
    planceholder ="Email"
    value={email}
    onChargeText={setEmail}
    keyboardType="email.address"
    />
    <TextInpult
    style={style.inpult}
    planceholder ="Mensagem"
    value={mensagem}
    onChargeText={setMensgem}
    />
    <TouchableOpacity style ={style.button} onPress={enviar}>
      <Text style={ styles.buttonText}>Enviar</Text>
    </TouchableOpacity>
  </View>
  );
 }
 const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f7fa' },
  header: { backgroundColor: '#004080', padding:15 },
  headerTitle: { color: '#white', fontSize:24, fontWeight: 'bold',marginBotto:10 },
  nav: { flexDirection: 'row', justifyContent: 'space-around' },
  navButton: { padding: 8 ,paddingHorizontal: 12, borderRadius: 4},
  navButtonActive: { backgroundColor: '#006cc' },
  navButtonText: { color: 'white', fontWeight: 'bold' },
  content: { padding: 15, flexGrow: 1 },
  section: { marginBottom: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom:10},
  input: { 
     borderWidth: 1,
     borderColor: '#ccc',
     borderWidth: 1,
     paddingHorizontal:10,
     paddingVertical: 8,
     borderRadius: 4,
     marginBottom: 8 },
  button: {
    backgroundColor: '#004080', 
    paddingVertical: 12,
    borderRadius: 6},
    alignItems: 'center',
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  footer: { backgroundColor: '#00264d', padding:15, alignItems: 'center', },
 })
