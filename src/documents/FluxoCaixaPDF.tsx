import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";

// --- CONFIGURAÇÃO DE ESTILOS ---
const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 60, // Espaço para o rodapé
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.5,
    color: "#101820", // monac-ink
  },
  // Cabeçalho
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#0047BB", // monac-blue
    paddingBottom: 10,
  },
  brandBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  brandName: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
  },
  tag: {
    fontSize: 8,
    backgroundColor: "#0047BB",
    color: "#FFFFFF",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 2,
    fontFamily: "Helvetica-Bold",
  },
  // Títulos
  mainTitle: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginTop: 10,
    marginBottom: 5,
    color: "#101820",
  },
  subtitle: {
    fontSize: 12,
    color: "#52525B", // cinza
    marginBottom: 20,
    fontFamily: "Helvetica-Oblique",
  },
  // Texto
  section: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: "#0047BB",
    marginTop: 10,
    marginBottom: 5,
    textTransform: "uppercase",
  },
  paragraph: {
    marginBottom: 8,
    textAlign: "left", // Mais seguro que justify
  },
  // Caixas
  highlight: {
    backgroundColor: "#F4F4F5",
    padding: 10,
    borderLeftWidth: 3,
    borderLeftColor: "#0047BB",
    marginVertical: 10,
  },
  alert: {
    backgroundColor: "#FEF2F2",
    padding: 10,
    borderWidth: 1,
    borderColor: "#FECACA",
    marginVertical: 10,
    borderRadius: 4,
  },
  alertText: {
    color: "#991B1B",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  // Listas
  listItem: {
    flexDirection: "row",
    marginBottom: 5,
    paddingLeft: 5,
  },
  bullet: {
    width: 15,
    color: "#0047BB",
    fontFamily: "Helvetica-Bold",
  },
  itemContent: {
    flex: 1,
  },
  // Rodapé (Fixo)
  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: "#E4E4E7",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 8,
    color: "#A1A1AA",
  },
  link: {
    fontSize: 8,
    color: "#0047BB",
    textDecoration: "none",
    fontFamily: "Helvetica-Bold",
  },
});

// --- DOCUMENTO PDF ---
export const FluxoCaixaPDF = () => (
  <Document>
    {/* === PÁGINA 1 === */}
    <Page size="A4" style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.brandBlock}>
          <Image src="/favicon-monac.png" style={styles.logo} />
          <Text style={styles.brandName}>Monac</Text>
        </View>
        <Text style={styles.tag}>Whitepaper • Gestão</Text>
      </View>

      <Text style={styles.mainTitle}>Fluxo de Caixa: O Guia Definitivo</Text>
      <Text style={styles.subtitle}>
        Como blindar o financeiro da sua empresa contra a quebra.
      </Text>

      {/* INTRODUÇÃO */}
      <View style={styles.section}>
        <Text style={styles.paragraph}>
          Existe um ditado no mundo dos negócios: "Faturamento é vaidade, Lucro
          é sanidade, mas Caixa é realidade."
        </Text>
        <Text style={styles.paragraph}>
          Segundo o SEBRAE, 60% das empresas fecham as portas nos primeiros
          cinco anos. O motivo raramente é a falta de vendas. O verdadeiro
          assassino silencioso de negócios promissores chama-se "Descontrole de
          Caixa".
        </Text>
        <Text style={styles.paragraph}>
          Este guia foi preparado pela equipe da Monac para tirar você do
          escuro.
        </Text>
      </View>

      {/* CAPÍTULO 1 */}
      <View style={styles.section}>
        <Text style={styles.heading}>1. Competência vs. Caixa</Text>
        <Text style={styles.paragraph}>
          O erro número 1 é confundir "Vender" com "Receber". Entenda a
          diferença vital:
        </Text>

        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.itemContent}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>
              Competência (Contábil):
            </Text>{" "}
            É a data da venda. Se vendeu R$ 100 mil parcelado em 10x, a
            contabilidade registra R$ 100 mil de receita hoje.
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.itemContent}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>
              Caixa (Realidade):
            </Text>{" "}
            É quando o dinheiro entra. Na venda acima, só entraram R$ 10 mil no
            seu bolso hoje.
          </Text>
        </View>

        <View style={styles.alert}>
          <Text style={styles.alertText}>
            PERIGO: Se você tem R$ 50 mil de contas para pagar hoje e conta com
            o valor total da venda parcelada, sua empresa quebrou, mesmo tendo
            "lucro".
          </Text>
        </View>
      </View>

      {/* CAPÍTULO 2 */}
      <View style={styles.section}>
        <Text style={styles.heading}>2. A Regra de Ouro</Text>
        <View style={styles.highlight}>
          <Text style={{ fontFamily: "Helvetica-Oblique", fontSize: 10 }}>
            "Nunca conte com o dinheiro que ainda não entrou na conta para pagar
            uma despesa que vence hoje. O banco não aceita 'previsão' como
            pagamento."
          </Text>
        </View>
        <Text style={styles.paragraph}>
          Para aplicar isso, conheça seu Ciclo Financeiro: o tempo entre pagar o
          fornecedor e receber do cliente. Se você paga em 30 dias e recebe em
          60, você tem um "buraco" de 30 dias que precisa ser coberto pelo
          Capital de Giro.
        </Text>
      </View>

      {/* RODAPÉ FIXO PÁGINA 1 */}
      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>
          Monac Sistemas • CNPJ: 59.088.662/0001-57
        </Text>
        <Text style={styles.footerText}>Página 1 de 2</Text>
      </View>
    </Page>

    {/* === PÁGINA 2 === */}
    <Page size="A4" style={styles.page}>
      {/* Header Compacto da Pág 2 */}
      <View style={{ ...styles.header, marginBottom: 20 }}>
        <Text style={{ fontSize: 10, color: "#A1A1AA" }}>
          Guia Definitivo • Continuação
        </Text>
      </View>

      {/* CAPÍTULO 3 */}
      <View style={styles.section}>
        <Text style={styles.heading}>3. Os Ladrões de Caixa</Text>
        <Text style={styles.paragraph}>
          Identifique agora se você comete estes erros clássicos:
        </Text>

        <View style={styles.listItem}>
          <Text style={styles.bullet}>1.</Text>
          <Text style={styles.itemContent}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>
              Mistura Patrimonial:
            </Text>{" "}
            Pagar conta de casa com o dinheiro da empresa. Isso te deixa cego
            sobre a saúde real do negócio.
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>2.</Text>
          <Text style={styles.itemContent}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>
              Falta de Categorização:
            </Text>{" "}
            Lançar tudo como "Despesas Diversas". Se não sabe onde gasta, não
            sabe onde cortar.
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>3.</Text>
          <Text style={styles.itemContent}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>
              Planilhas Manuais:
            </Text>{" "}
            Aceitam erros de digitação e não conversam com o estoque.
          </Text>
        </View>
      </View>

      {/* CAPÍTULO 4 */}
      <View style={styles.section}>
        <Text style={styles.heading}>4. Checklist da Rotina Financeira</Text>
        <Text style={styles.paragraph}>
          Implemente esta rotina sagrada a partir de amanhã:
        </Text>

        <View style={styles.listItem}>
          <Text style={styles.bullet}>[ ]</Text>
          <Text style={styles.itemContent}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>Diário:</Text>{" "}
            Conciliação Bancária (conferir saldo) + Baixa de Recebimentos.
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>[ ]</Text>
          <Text style={styles.itemContent}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>Semanal:</Text>{" "}
            Cobrar inadimplentes + Previsão de Caixa para 15 dias.
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>[ ]</Text>
          <Text style={styles.itemContent}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>Mensal:</Text>{" "}
            Analisar DRE (Lucro vs Prejuízo) + Renegociar 3 custos fixos.
          </Text>
        </View>
      </View>

      {/* CONCLUSÃO */}
      <View style={styles.highlight}>
        <Text
          style={{
            fontFamily: "Helvetica-Bold",
            fontSize: 11,
            color: "#0047BB",
            marginBottom: 5,
          }}
        >
          A Solução Definitiva
        </Text>
        <Text style={{ fontSize: 10, lineHeight: 1.4 }}>
          Fazer tudo isso manualmente é lento e perigoso. O{" "}
          <Text style={{ fontFamily: "Helvetica-Bold" }}>Monac ERP</Text>{" "}
          integra vendas, estoque e financeiro. Vendeu no balcão? O sistema já
          alimenta o fluxo de caixa.
        </Text>
        <Text
          style={{
            fontSize: 10,
            marginTop: 10,
            fontFamily: "Helvetica-Oblique",
          }}
        >
          Pare de gerenciar pelo retrovisor. Comece a olhar para frente.
        </Text>
      </View>

      {/* CTA FINAL */}
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: "#E4E4E7",
          paddingTop: 20,
        }}
      >
        <Text style={{ fontSize: 10, marginBottom: 5 }}>
          Conheça a plataforma que automatiza tudo isso:
        </Text>
        <Link
          src="https://monacsistemas.netlify.app"
          style={{ ...styles.link, fontSize: 12 }}
        >
          Acessar monacsistemas.netlify.app
        </Link>
      </View>

      {/* RODAPÉ FIXO PÁGINA 2 */}
      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>
          Monac Sistemas • Todos os direitos reservados
        </Text>
        <Text style={styles.footerText}>Página 2 de 2</Text>
      </View>
    </Page>
  </Document>
);
