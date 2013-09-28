// JavaScript
describe('Service: Facebook', function () {
  var facebook, facebookProvider;

  beforeEach(function () {
    // Load the service's module
    module('Facebook', function (_FacebookProvider_) {
      facebookProvider = _FacebookProvider_;
    });

    inject(function (_Facebook_) {
      facebook = _Facebook_;
    });
  });

  it('should exist', function () {
    expect(!!facebookProvider).toBe(true);
  });

  describe('the provider api should provide', function () {

    it('appId as default value', function () {
      expect(facebookProvider.getAppId()).toBe(null);
    });
    it('working getter / setter for appId', function () {
      facebookProvider.setAppId(123456789101112)
      expect(facebookProvider.getAppId()).toBe(123456789101112);
    });

    it('locale as default value', function () {
      expect(facebookProvider.getLocale()).toBe('en_US');
    });
    it('working getter / setter for locale', function () {
      facebookProvider.setLocale('de_DE')
      expect(facebookProvider.getLocale()).toBe('de_DE');
    });

    it('status as default value', function () {
      expect(facebookProvider.getStatus()).toBe(true);
    });
    it('working getter / setter for status', function () {
      facebookProvider.setStatus(false)
      expect(facebookProvider.getStatus()).toBe(false);
    });

    it('channel as default value', function () {
      expect(facebookProvider.getChannel()).toBe(null);
    });
    it('working getter / setter for channel', function () {
      facebookProvider.setChannel('//WWW.YOUR_DOMAIN.COM/channel.html')
      expect(facebookProvider.getChannel()).toBe('//WWW.YOUR_DOMAIN.COM/channel.html');
    });

    it('cookie as default value', function () {
      expect(facebookProvider.getCookie()).toBe(true);
    });
    it('working getter / setter for cookie', function () {
      facebookProvider.setCookie(false)
      expect(facebookProvider.getCookie()).toBe(false);
    });

    it('xfbml as default value', function () {
      expect(facebookProvider.getXfbml()).toBe(true);
    });
    it('working getter / setter for xfbml', function () {
      facebookProvider.setXfbml(false)
      expect(facebookProvider.getXfbml()).toBe(false);
    });
  });
});