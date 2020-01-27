const { BusinessPartner } = require('@sap/cloud-sdk-vdm-business-partner-service');

async function businessPartners(req, res) {
    getAllBusinessPartners()
        .then(businessPartners => res.status(200).send(businessPartners))
        .catch(error => res.status(500).send(error));
}

function getAllBusinessPartners() {
    return BusinessPartner.requestBuilder()
        .getAll()
        .select(
            BusinessPartner.BUSINESS_PARTNER,
            BusinessPartner.FIRST_NAME,
            BusinessPartner.LAST_NAME
        )
        .filter(
            BusinessPartner.BUSINESS_PARTNER_CATEGORY.equals('1')
        )
        .withCustomHeaders({ APIKey: 'feCSq2Qf4x7Xsw4NgaiXXO5KQXaG46pP'})
        .execute({
            url: 'https://sandbox.api.sap.com/s4hanacloud'
        });
}

module.exports.businessPartners = businessPartners;
