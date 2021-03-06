// Inspired by fbjs

// The jshint code had more globals, which may have had something to do with
// machine-generated code. I couldn"t find references with tbgs.
//
// Values of true mean the global may be modified. Values of false represent
// constants.
module.exports = {
    __DEV__: true,
    // Haste-defined variables
    require: true,
    requireDynamic: true,
    requireLazy: true,
    // more haste variables are defined in getConfig for modules

    // Workarounds for https://github.com/babel/babel-eslint/issues/130
    // no-undef errors incorrectly on these global flow types
    // https://fburl.com/flow-react-defs
    ReactComponent: false,
    ReactClass: false,
    ReactElement: false,
    ReactPropsCheckType: false,
    ReactPropsChainableTypeChecker: false,
    ReactPropTypes: false,
    SyntheticEvent: false,
    SyntheticClipboardEvent: false,
    SyntheticCompositionEvent: false,
    SyntheticInputEvent: false,
    SyntheticUIEvent: false,
    SyntheticFocusEvent: false,
    SyntheticKeyboardEvent: false,
    SyntheticMouseEvent: false,
    SyntheticDragEvent: false,
    SyntheticWheelEvent: false,
    SyntheticTouchEvent: false,
    // a bunch of types extracted from http://git.io/vOtv9
    // there"s a bunch of overlap with browser globals, so we try to avoid
    // redefining some of those.
    $Either: false,
    $All: false,
    $Tuple: false,
    $Supertype: false,
    $Subtype: false,
    $Shape: false,
    $Diff: false,
    $Keys: false,
    $Enum: false,
    $Exports: false,
    Class: false,
    function: false,
    Iterable: false,
    // suppress types
    $FlowIssue: false,
    $FlowFixMe: false,
    $FixMe: false,
    // https://fburl.com/flow-core-defs
    Iterator: false,
    IteratorResult: false,
    $await: false,
    ArrayBufferView: false,
    // https://fburl.com/flow-fb-defs
    FbtResult: false,
    $jsx: false,
    FBID: false,
    AdAccountID: false,
    UID: false,
    ReactNode: false,
    Fbt: false,
    // https://fburl.com/flow-liverail-defs
    LRID: false,
    // https://fburl.com/flow-powereditor-def
    UkiAccount: false,
    UkiAdgroup: false,
    UkiCampaign: false,
    UkiCampaignGroup: false,
    // some of this maybe should be handled by the npm globals module, but it
    // doesn"t have proper WebRTC support yet
    // https://fburl.com/flow-webrtc-defs
    RTCConfiguration: false,
    RTCIceServer: false,
    RTCOfferOptions: false,
    RTCStatsReport: false,
    RTCStatsCallback: false,
    RTCPeerConnection: false,
    RTCPeerConnectionErrorCallback: false,
    RTCSessionDescription: false,
    RTCSessionDescriptionInit: false,
    RTCSessionDescriptionCallback: false,
    RTCIceCandidate: false,
    RTCIceCandidateInit: false,
    RTCPeerConnectionIceEvent: false,
    RTCPeerConnectionIceEventInit: false,
    RTCDataChannel: false,
    RTCDataChannelInit: false,
    RTCDataChannelEvent: false,
    RTCDataChannelEventInit: false
}
