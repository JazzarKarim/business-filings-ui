import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { getFeatureFlag } from '@/utils'
import { AllowableActions, CorpTypeCd } from '@/enums'

@Component({})
export default class AllowableActionsMixin extends Vue {
  @Getter getEntityType!: CorpTypeCd
  @Getter hasBlocker!: boolean
  @Getter isBComp!: boolean
  @Getter isBcCompany!: boolean
  @Getter isUlc!: boolean
  @Getter isHistorical!: boolean
  @Getter isRoleStaff!: boolean

  /**
   * Returns True if the specified action is allowed, else False.
   * @param action the action to check
   */
  isAllowed (action: AllowableActions): boolean {
    const businessId = sessionStorage.getItem('BUSINESS_ID')

    switch (action) {
      case AllowableActions.ADD_STAFF_COMMENT: {
        return this.isRoleStaff
      }

      case AllowableActions.DISSOLVE_COMPANY: {
        return getFeatureFlag('supported-dissolution-entities')?.includes(this.getEntityType)
      }

      case AllowableActions.DOWNLOAD_BUSINESS_SUMMARY: {
        return getFeatureFlag('download-summary-enabled')
      }

      case AllowableActions.EDIT_BUSINESS_PROFILE: {
        return (!this.isHistorical && !!businessId)
      }

      case AllowableActions.FILE_ADDRESS_CHANGE: {
        return (!this.isHistorical && !this.hasBlocker && !!businessId)
      }

      case AllowableActions.FILE_ANNUAL_REPORT: {
        return (!this.isHistorical && !this.hasBlocker && !!businessId)
      }

      case AllowableActions.FILE_CORRECTION: {
        return (!this.isHistorical && !this.hasBlocker && !!businessId && this.isRoleStaff)
      }

      case AllowableActions.FILE_DIRECTOR_CHANGE: {
        return (!this.isHistorical && !this.hasBlocker && !!businessId)
      }

      case AllowableActions.FILE_STAFF_NOTATION: {
        return (!this.isHistorical && !this.hasBlocker && !!businessId && this.isRoleStaff)
      }

      case AllowableActions.VIEW_CHANGE_COMPANY_INFO: {
        return (!this.isHistorical && (this.isBComp || this.isBcCompany || this.isUlc))
      }

      default: return null
    }
  }
}
