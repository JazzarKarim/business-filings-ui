/**
 * A filing's consent to continuation out object from the API. See:
 * https://github.com/bcgov/business-schemas/blob/main/src/registry_schemas/schemas/consent_continuation_out.json
 */
export interface ConsentContinuationOutIF {
  details: string
}

/** Consent to Continuation Out filing interface. */
export interface ConsentContinuationOutFilingIF {
  header: {
    bcolAccountNumber?: string
    certifiedBy?: string
    date: string
    datNumber?: string
    effectiveDate?: string
    folioNumber?: string
    name: string
    priority?: boolean
    routingSlipNumber?: string
    waiveFees?: boolean
  }
  business: {
    foundingDate: string
    identifier: string
    legalName: string
    legalType: string
  }
  consentContinuationOut: ConsentContinuationOutIF
}
