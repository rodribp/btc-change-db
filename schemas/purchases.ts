export default {
    name: 'changes',
    type: 'document',
    title: 'Changes',
    fields: [
        {
            name: 'id_lnurl',
            type: 'string',
            title: 'ID LNURL'
        }, 
        {
            name: 'link_lnurl',
            type: 'string',
            title: 'Lnurlw',
        },
        {
            name: 'date',
            type: 'string',
            title: 'Date'
        },
        {
            name: 'amount_sats',
            type: 'string',
            title: 'Amount Sats'
        },
        {
            name: 'amount_usd',
            type: 'string',
            title: 'Amount Usd'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'store',
            type: 'reference',
            title: 'store',
            to: [{type: 'stores'}]
        }
    ]
}