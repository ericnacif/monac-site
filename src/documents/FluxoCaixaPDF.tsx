import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { SITE_CONFIG } from "../config";

const styles = StyleSheet.create({
  page: { flexDirection: "column", backgroundColor: "#F2F0EB", padding: 48 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 36,
    paddingBottom: 20,
    borderBottom: "1px solid #D4D4D8",
  },
  logoText: { fontSize: 20, fontWeight: "bold", color: "#0047BB" },
  headerRight: { alignItems: "flex-end" },
  docTitle: {
    fontSize: 10,
    color: "#101820",
    opacity: 0.4,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  date: { fontSize: 10, color: "#101820", opacity: 0.4, marginTop: 4 },
  h1: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#101820",
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  intro: {
    fontSize: 11,
    color: "#101820",
    opacity: 0.6,
    lineHeight: 1.6,
    marginBottom: 32,
    maxWidth: "80%",
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#0047BB",
    marginBottom: 16,
    marginTop: 28,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderLeft: "3px solid #0047BB",
  },
  cardLabel: {
    fontSize: 10,
    color: "#101820",
    opacity: 0.5,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  cardValue: { fontSize: 20, color: "#101820", fontWeight: "bold" },
  cardValuePositive: { fontSize: 20, color: "#059669", fontWeight: "bold" },
  cardValueNegative: { fontSize: 20, color: "#DC2626", fontWeight: "bold" },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#101820",
    borderRadius: "6px 6px 0 0",
    padding: "8px 16px",
    marginTop: 8,
  },
  tableHeaderText: {
    fontSize: 9,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: "10px 16px",
    borderBottom: "1px solid #F2F0EB",
  },
  tableRowAlt: {
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    padding: "10px 16px",
    borderBottom: "1px solid #F2F0EB",
  },
  tableText: { fontSize: 10, color: "#101820" },
  tableTextMuted: { fontSize: 10, color: "#101820", opacity: 0.4 },
  tableTextPositive: { fontSize: 10, color: "#059669", fontWeight: "bold" },
  tableTextNegative: { fontSize: 10, color: "#DC2626", fontWeight: "bold" },
  col1: { flex: 2 },
  col2: { flex: 1, textAlign: "center" },
  col3: { flex: 1, textAlign: "right" },
  col4: { flex: 1, textAlign: "center" },
  tip: {
    backgroundColor: "#EFF6FF",
    borderRadius: 8,
    padding: 16,
    marginTop: 28,
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
    borderLeft: "3px solid #0047BB",
  },
  tipIcon: { fontSize: 16 },
  tipTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0047BB",
    marginBottom: 4,
  },
  tipText: { fontSize: 10, color: "#101820", opacity: 0.7, lineHeight: 1.5 },
  footer: {
    marginTop: "auto",
    paddingTop: 24,
    borderTop: "1px solid #D4D4D8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: { fontSize: 9, color: "#101820", opacity: 0.4 },
  footerBrand: { fontSize: 9, fontWeight: "bold", color: "#0047BB" },
});

const transactions = [
  {
    desc: "Recebimento — Venda PDV",
    date: "01/04",
    category: "Vendas",
    type: "entrada",
    value: "R$ 3.200,00",
  },
  {
    desc: "Pagamento Fornecedor MG",
    date: "02/04",
    category: "Compras",
    type: "saida",
    value: "R$ 1.850,00",
  },
  {
    desc: "Recebimento — Boleto #1042",
    date: "03/04",
    category: "Contas a Receber",
    type: "entrada",
    value: "R$ 980,00",
  },
  {
    desc: "Aluguel Comercial",
    date: "05/04",
    category: "Despesas Fixas",
    type: "saida",
    value: "R$ 2.200,00",
  },
  {
    desc: "Venda à Prazo — NF 8831",
    date: "07/04",
    category: "Vendas",
    type: "entrada",
    value: "R$ 5.400,00",
  },
  {
    desc: "Energia Elétrica",
    date: "10/04",
    category: "Despesas Fixas",
    type: "saida",
    value: "R$ 430,00",
  },
  {
    desc: "Recebimento Pix — Cliente B",
    date: "12/04",
    category: "Vendas",
    type: "entrada",
    value: "R$ 1.760,00",
  },
];

export function FluxoCaixaPDF() {
  const today = new Date().toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });
  const year = new Date().getFullYear();

  return (
    <Document
      title="Guia de Fluxo de Caixa — Monac ERP"
      author="Monac Sistemas"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logoText}>Monac ERP™</Text>
          <View style={styles.headerRight}>
            <Text style={styles.docTitle}>E-book Gratuito</Text>
            <Text style={styles.date}>{today}</Text>
          </View>
        </View>

        <Text style={styles.h1}>Fluxo de Caixa:{"\n"}O Guia Definitivo.</Text>
        <Text style={styles.intro}>
          Entenda como controlar entradas e saídas para nunca ficar no vermelho.
          Este material foi criado pela equipe da Monac para gestores que querem
          clareza financeira sem precisar ser contadores.
        </Text>

        <Text style={styles.sectionTitle}>Exemplo prático — Abril {year}</Text>
        <View style={styles.card}>
          <View>
            <Text style={styles.cardLabel}>Total de Entradas</Text>
            <Text style={styles.cardValuePositive}>+ R$ 11.340,00</Text>
          </View>
          <View>
            <Text style={styles.cardLabel}>Total de Saídas</Text>
            <Text style={styles.cardValueNegative}>- R$ 4.480,00</Text>
          </View>
          <View>
            <Text style={styles.cardLabel}>Saldo Líquido</Text>
            <Text style={styles.cardValue}>R$ 6.860,00</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Registro de Movimentos</Text>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.col1]}>Descrição</Text>
          <Text style={[styles.tableHeaderText, styles.col2]}>Data</Text>
          <Text style={[styles.tableHeaderText, styles.col4]}>Categoria</Text>
          <Text style={[styles.tableHeaderText, styles.col3]}>Valor</Text>
        </View>
        {transactions.map((t, i) => (
          <View
            key={i}
            style={i % 2 === 0 ? styles.tableRow : styles.tableRowAlt}
          >
            <Text style={[styles.tableText, styles.col1]}>{t.desc}</Text>
            <Text style={[styles.tableTextMuted, styles.col2]}>{t.date}</Text>
            <Text style={[styles.tableTextMuted, styles.col4]}>
              {t.category}
            </Text>
            <Text
              style={[
                t.type === "entrada"
                  ? styles.tableTextPositive
                  : styles.tableTextNegative,
                styles.col3,
              ]}
            >
              {t.value}
            </Text>
          </View>
        ))}

        <View style={styles.tip}>
          <View style={{ flex: 1 }}>
            <Text style={styles.tipTitle}>💡 Dica Monac</Text>
            <Text style={styles.tipText}>
              Com o Monac ERP, esse relatório é gerado automaticamente em tempo
              real. Chega de montar planilhas no final do mês — seu fluxo de
              caixa fica sempre atualizado, com conciliação bancária automática.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © {year} Monac Sistemas · Todos os direitos reservados
          </Text>
          <Text style={styles.footerBrand}>{SITE_CONFIG.url}</Text>
        </View>
      </Page>
    </Document>
  );
}
