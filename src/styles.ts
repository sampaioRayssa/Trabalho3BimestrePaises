import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#f8fafc' 
    },
    center: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20 
    },
    loadingText: { 
        marginTop: 12, 
        color: '#64748b', 
        fontSize: 16 
    },
    erroText: { 
        color: '#dc2626', 
        fontSize: 16, 
        textAlign: 'center', 
        marginBottom: 12 
    },
    tentarButton: {
        backgroundColor: '#2563eb', 
        paddingHorizontal: 16, 
        paddingVertical: 10, 
        borderRadius: 8 
    },
    tentarText: { 
        color: '#fff', 
        fontWeight: '600' 
    },
    listContent: { 
        padding: 16, 
        gap: 12 
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    cardLeft: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 14, 
        flex: 1 
    },
    codeText: { 
        fontSize: 20, 
        fontWeight: '700', 
        color: '#1e293b' 
    },
    paisName: { 
        fontSize: 16, 
        fontWeight: '600', 
        color: '#0f172a' 
    },
    capitalText: { 
        fontSize: 13, 
        color: '#64748b', 
        marginTop: 2 
    },
    detalhesButton: {
        backgroundColor: '#2563eb',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 8,
    },
    detalhesButtonText: { 
        color: '#fff', 
        fontWeight: '600', 
        fontSize: 13 
    },

    containerDetalhes: { 
        flex: 1, 
        backgroundColor: '#fff', 
        padding: 24, 
        alignItems: 'center' 
    },
    cardInfo: { 
        alignItems: 'center', 
        marginVertical: 32 
    },
    paisTitle: { 
        fontSize: 24, 
        fontWeight: '700', 
        color: '#0f172a'
    },
    capitalTextDetalhes: { 
        fontSize: 16, 
        color: '#64748b', 
        marginTop: 4 
    },
    acoes: { 
        width: '100%', 
        gap: 12 
    },
    favoritoBtn: {
        backgroundColor: '#fef3c7',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    favoritoBtnText: { 
        color: '#92400e', 
        fontWeight: '700', 
        fontSize: 15 
    },
    acaoBtn: {
        backgroundColor: '#eff6ff',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    acaoBtnText: { 
        color: '#2563eb', 
        fontWeight: '600', 
        fontSize: 15 
    },

    sobreposicao: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        justifyContent: 'flex-end',
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 32,
        alignItems: 'center',
    },
    traco: {
        width: 38,
        height: 4,
        backgroundColor: '#cbd5e1',
        borderRadius: 2,
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: 6,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        color: '#64748b',
        marginBottom: 24,
        textAlign: 'center',
    },
    acoesFavMod: {
        width: '100%',
        gap: 10,
    },
    confirmButtonFavMod: {
        backgroundColor: '#2563eb', 
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    confirmButtonTextFavMod: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
    },
    cancelButtonFavMod: {
        backgroundColor: '#eff6ff', 
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    cancelButtonTextFavMod: {
        color: '#2563eb',
        fontWeight: '600',
        fontSize: 15,
    },

    containerFavS: { 
        flex: 1, 
        backgroundColor: '#f8fafc' 
    },
    vazioContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 32 
    },
    vazioText: { 
        textAlign: 'center', 
        fontSize: 16, 
        color: '#64748b', 
        lineHeight: 24 
    },
    cardFavS: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    paisNameFavS: { 
        fontSize: 16, 
        fontWeight: '600' 
    },
    btnFavS: { 
        backgroundColor: '#2563eb', 
        paddingHorizontal: 12, 
        paddingVertical: 6, 
        borderRadius: 6 
    },
    btnTextFavS: { 
        color: '#fff', 
        fontWeight: '600' 
    },

    containerSobre: { 
        flex: 1, 
        alignItems: 'center', 
        padding: 24, 
        backgroundColor: '#fff' 
    },
    icon: { 
        fontSize: 64, 
        marginBottom: 12, 
        marginTop: 10 
    },
    titleSobre: { 
        fontSize: 22, 
        fontWeight: '700', 
        marginBottom: 8, 
        color: '#0f172a' 
    },
    description: { 
        fontSize: 15, 
        color: '#64748b', 
        textAlign: 'center', 
        lineHeight: 22 
    },
})