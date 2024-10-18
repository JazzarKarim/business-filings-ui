import EnumUtilities from '@/services/enum-utilities'

describe('Enum Utilities', () => {
  it('returns correct values for filing state helpers', () => {
    expect(EnumUtilities.isStatusApproved({ status: 'APPROVED' })).toBe(true)
    expect(EnumUtilities.isStatusAwaitingReview({ status: 'AWAITING_REVIEW' })).toBe(true)
    expect(EnumUtilities.isStatusCancelled({ status: 'CANCELLED' })).toBe(true)
    expect(EnumUtilities.isStatusChangeRequested({ status: 'CHANGE_REQUESTED' })).toBe(true)
    expect(EnumUtilities.isStatusCompleted({ status: 'COMPLETED' })).toBe(true)
    expect(EnumUtilities.isStatusCorrected({ status: 'CORRECTED' })).toBe(true)
    expect(EnumUtilities.isStatusDeleted({ status: 'DELETED' })).toBe(true)
    expect(EnumUtilities.isStatusDraft({ status: 'DRAFT' })).toBe(true)
    expect(EnumUtilities.isStatusError({ status: 'ERROR' })).toBe(true)
    expect(EnumUtilities.isStatusNew({ status: 'NEW' })).toBe(true)
    expect(EnumUtilities.isStatusPaid({ status: 'PAID' })).toBe(true)
    expect(EnumUtilities.isStatusPending({ status: 'PENDING' })).toBe(true)
    expect(EnumUtilities.isStatusPendingCorrection({ status: 'PENDING_CORRECTION' })).toBe(true)
    expect(EnumUtilities.isStatusRejected({ status: 'REJECTED' })).toBe(true)
    expect(EnumUtilities.isStatusWithdrawn({ status: 'WITHDRAWN' })).toBe(true)
  })

  it('returns correct values for filing type helpers', () => {
    expect(EnumUtilities.isTypeAdminFreeze({ name: 'adminFreeze' })).toBe(true)
    expect(EnumUtilities.isTypeAlteration({ name: 'alteration' })).toBe(true)
    expect(EnumUtilities.isTypeAnnualReport({ name: 'annualReport' })).toBe(true)
    expect(EnumUtilities.isTypeChangeOfAddress({ name: 'changeOfAddress' })).toBe(true)
    expect(EnumUtilities.isTypeChangeOfDirectors({ name: 'changeOfDirectors' })).toBe(true)
    expect(EnumUtilities.isTypeChangeOfName({ name: 'changeOfName' })).toBe(true)
    expect(EnumUtilities.isTypeChangeOfRegistration({ name: 'changeOfRegistration' })).toBe(true)
    expect(EnumUtilities.isTypeConsentContinuationOut({ name: 'consentContinuationOut' })).toBe(true)
    expect(EnumUtilities.isTypeContinuationIn({ name: 'continuationIn' })).toBe(true)
    expect(EnumUtilities.isTypeContinuationOut({ name: 'continuationOut' })).toBe(true)
    expect(EnumUtilities.isTypeConversion({ name: 'conversion' })).toBe(true)
    expect(EnumUtilities.isTypeCorrection({ name: 'correction' })).toBe(true)
    expect(EnumUtilities.isTypeDissolutionAdministrative({ name: 'dissolution', filingSubType: 'administrative' }))
      .toBe(true)
    expect(EnumUtilities.isTypeDissolutionInvoluntary({ name: 'dissolution', filingSubType: 'involuntary' }))
      .toBe(true)
    expect(EnumUtilities.isTypeDissolutionVoluntary({ name: 'dissolution', filingSubType: 'voluntary' })).toBe(true)
    expect(EnumUtilities.isTypeIncorporationApplication({ name: 'incorporationApplication' })).toBe(true)
    expect(EnumUtilities.isTypePutBackOn({ name: 'putBackOn' })).toBe(true)
    expect(EnumUtilities.isTypeRegistrarsNotation({ name: 'registrarsNotation' })).toBe(true)
    expect(EnumUtilities.isTypeRegistrarsOrder({ name: 'registrarsOrder' })).toBe(true)
    expect(EnumUtilities.isTypeRegistration({ name: 'registration' })).toBe(true)
    expect(EnumUtilities.isTypeRestoration({ name: 'restoration' })).toBe(true)
    expect(EnumUtilities.isTypeRestorationFull({ name: 'restoration', filingSubType: 'fullRestoration' })).toBe(true)
    expect(EnumUtilities.isTypeRestorationLimited({ name: 'restoration', filingSubType: 'limitedRestoration' }))
      .toBe(true)
    expect(EnumUtilities.isTypeRestorationLimitedExtension({ name: 'restoration',
      filingSubType: 'limitedRestorationExtension' })).toBe(true)
    expect(EnumUtilities.isTypeRestorationLimitedToFull({ name: 'restoration',
      filingSubType: 'limitedRestorationToFull' })).toBe(true)
    expect(EnumUtilities.isTypeSpecialResolution({ name: 'specialResolution' })).toBe(true)
    expect(EnumUtilities.isTypeStaff({ name: 'registrarsNotation' })).toBe(true)
    expect(EnumUtilities.isTypeStaff({ name: 'registrarsOrder' })).toBe(true)
    expect(EnumUtilities.isTypeStaff({ name: 'courtOrder' })).toBe(true)
    expect(EnumUtilities.isTypeStaff({ name: 'putBackOn' })).toBe(true)
    expect(EnumUtilities.isTypeStaff({ name: 'adminFreeze' })).toBe(true)
    expect(EnumUtilities.isTypeStaff({ name: 'dissolution', filingSubType: 'administrative' })).toBe(true)
    expect(EnumUtilities.isTypeTransition({ name: 'transition' })).toBe(true)
  })

  it('returns correct values for payment method helpers', () => {
    expect(EnumUtilities.isPayMethodCreditCard({ paymentMethod: 'CC' })).toBe(true)
    expect(EnumUtilities.isPayMethodDirectPay({ paymentMethod: 'DIRECT_PAY' })).toBe(true)
    expect(EnumUtilities.isPayMethodDrawdown({ paymentMethod: 'DRAWDOWN' })).toBe(true)
    expect(EnumUtilities.isPayMethodOnlineBanking({ paymentMethod: 'ONLINE_BANKING' })).toBe(true)
  })

  it('returns correct values for filingTypeToName()', () => {
    expect(EnumUtilities.filingTypeToName(('alteration' as any))).toBe('Alteration')
    expect(EnumUtilities.filingTypeToName(('annualReport' as any), '2020')).toBe('Annual Report (2020)')
    expect(EnumUtilities.filingTypeToName(('changeOfAddress' as any))).toBe('Address Change')
    expect(EnumUtilities.filingTypeToName(('changeOfCompanyInfo' as any))).toBe('Change of Company Information')
    expect(EnumUtilities.filingTypeToName(('changeOfDirectors' as any))).toBe('Director Change')
    expect(EnumUtilities.filingTypeToName(('changeOfName' as any))).toBe('Legal Name Change')
    expect(EnumUtilities.filingTypeToName(('continuationIn' as any))).toBe('Continuation Application')
    expect(EnumUtilities.filingTypeToName(('continuationIn' as any), null, null, 'APPROVED' as any))
      .toBe('Continuation Application')
    expect(EnumUtilities.filingTypeToName(('continuationIn' as any), null, null, 'AWAITING_REVIEW' as any))
      .toBe('Continuation Authorization')
    expect(EnumUtilities.filingTypeToName(('continuationIn' as any), null, null, 'CHANGE_REQUESTED' as any))
      .toBe('Continuation Authorization')
    expect(EnumUtilities.filingTypeToName(('continuationIn' as any), null, null, 'COMPLETED' as any))
      .toBe('Continuation Application')
    expect(EnumUtilities.filingTypeToName(('continuationIn' as any), null, null, 'PAID' as any))
      .toBe('Continuation Application')
    expect(EnumUtilities.filingTypeToName(('continuationIn' as any), null, null, 'REJECTED' as any))
      .toBe('Continuation Application')
    expect(EnumUtilities.filingTypeToName(('continuationIn' as any), null, null, 'DRAFT' as any))
      .toBe('Continuation Authorization')
    expect(EnumUtilities.filingTypeToName(('conversion' as any))).toBe('Record Conversion')
    expect(EnumUtilities.filingTypeToName(('correction' as any))).toBe('Correction')
    expect(EnumUtilities.filingTypeToName(('courtOrder' as any))).toBe('Court Order')
    expect(EnumUtilities.filingTypeToName(('dissolution' as any))).toBe('Dissolution')
    expect(EnumUtilities.filingTypeToName(('dissolved' as any))).toBe('Involuntary Dissolution')
    expect(EnumUtilities.filingTypeToName(('incorporationApplication' as any))).toBe('Incorporation Application')
    expect(EnumUtilities.filingTypeToName(('putBackOn' as any))).toBe('Put Back On')
    expect(EnumUtilities.filingTypeToName(('registrarsNotation' as any))).toBe('Registrar\'s Notation')
    expect(EnumUtilities.filingTypeToName(('registrarsOrder' as any))).toBe('Registrar\'s Order')
    expect(EnumUtilities.filingTypeToName(('registration' as any))).toBe('Registration')
    expect(EnumUtilities.filingTypeToName(('restoration' as any), null, ('limitedRestorationToFull' as any)))
      .toBe('Limited Restoration To Full')
    expect(EnumUtilities.filingTypeToName(('restoration' as any), null, ('limitedRestorationExtension' as any)))
      .toBe('Limited Restoration Extension')
    expect(EnumUtilities.filingTypeToName(('restoration' as any), null, ('fullRestoration' as any)))
      .toBe('Full Restoration')
    expect(EnumUtilities.filingTypeToName(('restoration' as any), null, ('limitedRestoration' as any)))
      .toBe('Limited Restoration')
    expect(EnumUtilities.filingTypeToName(('specialResolution' as any))).toBe('Special Resolution')
    expect(EnumUtilities.filingTypeToName(('transition' as any))).toBe('Transition Application')
    expect(EnumUtilities.filingTypeToName(('unknown' as any))).toBe('Unknown')
  })

  it('returns correct values for dissolutionTypeToName()', () => {
    expect(EnumUtilities.dissolutionTypeToName(false, ('administrative' as any))).toBe('Administrative Dissolution')
    expect(EnumUtilities.dissolutionTypeToName(false, ('involuntary' as any))).toBe('Dissolved for Failure to File')
    expect(EnumUtilities.dissolutionTypeToName(false, ('voluntary' as any))).toBe('Voluntary Dissolution')
    expect(EnumUtilities.dissolutionTypeToName(true, ('voluntary' as any))).toBe('Dissolution')
    expect(EnumUtilities.dissolutionTypeToName(false, ('unknown' as any))).toBe('Unknown')
  })
})
