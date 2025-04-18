/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import px2vw from "@/utils/px2vw";

function Index() {
  return (
    <Flex flexDir="column">
      <Text
        fontFamily="Orbitron"
        color="white.100"
        fontWeight="600"
        fontSize={{ base: px2vw(22), lg: "22px" }}
        lineHeight={{ base: px2vw(28), lg: "28px" }}
        mb={{ base: px2vw(20), lg: "20px" }}
      >
        Privacy Policy
      </Text>
      <Text
        fontFamily="Nunito"
        color="white.500"
        fontWeight="400"
        fontSize={{ base: px2vw(16), lg: "16px" }}
        lineHeight={{ base: px2vw(22), lg: "22px" }}
        mb={{ base: px2vw(20), lg: "20px" }}
      >
        Gamifly ("us", "we", or "our") operates the website. This page informs
        you of our policies regarding the collection, use, and disclosure of
        personal data when you use our Service and the choices you have
        associated with that data. We use your data to provide and improve the
        Service. By using the Service, you agree to the collection and use of
        information in accordance with this policy. Unless otherwise defined in
        this Privacy Policy, terms used in this Privacy Policy have the same
        meanings as in our Terms and Conditions. INFORMATION COLLECTION AND USE
        We collect several different types of information for various purposes
        to provide and improve our Service to you. 1. Personal Data While using
        our Service, we may ask you to provide us with certain personally
        identifiable information that can be used to contact or identify you
        ("Personal Data"). Personally identifiable information may include, but
        is not limited to: Email address, Cookies, and Usage Data 2. Usage Data
        We may also collect information that your browser sends whenever you
        visit our Service or when you access the Service by or through a mobile
        device ("Usage Data"). This Usage Data may include information such as
        your computer's Internet Protocol address (e.g. IP address), browser
        type, browser version, the pages of our Service that you visit, the time
        and date of your visit, the time spent on those pages, unique device
        identifiers and other diagnostic data. When you access the Service by or
        through a mobile device, this Usage Data may include information such as
        the type of mobile device you use, your mobile device unique ID, the IP
        address of your mobile device, your mobile operating system, the type of
        mobile Internet browser you use, unique device identifiers and other
        diagnostic data. 3. Tracking Cookies Data We use cookies and similar
        tracking technologies to track the activity on our Service and hold
        certain information. Cookies are files with a small amount of data which
        may include an anonymous unique identifier. Cookies are sent to your
        browser from a website and stored on your device. Tracking technologies
        also used are beacons, tags, and scripts to collect and track
        information and to improve and analyze our Service. You can instruct
        your browser to refuse all cookies or to indicate when a cookie is being
        sent. However, if you do not accept cookies, you may not be able to use
        some portions of our Service. USE OF DATA Gamifly uses the collected
        data for various purposes: To provide and maintain the Service To notify
        you about changes to our Service To allow you to participate in
        interactive features of our Service when you choose to do so To provide
        customer care and support To provide analysis or valuable information so
        that we can improve the Service To monitor the usage of the Service To
        detect, prevent and address technical issues TRANSFER OF DATA Your
        information, including Personal Data, may be transferred to, and
        maintained on computers located outside of your state, province, country
        or other governmental jurisdiction where the data protection laws may
        differ from those from your jurisdiction. Your consent to this Privacy
        Policy followed by your submission of such information represents your
        agreement to that transfer. Gamifly will take all steps reasonably
        necessary to ensure that your data is treated securely and in accordance
        with this Privacy Policy and no transfer of your Personal Data will take
        place to an organization or a country unless there are adequate controls
        in place including the security of your data and other personal
        information DISCLOSURE OF DATA Gamifly may disclose your Personal Data
        in the good faith belief that such action is necessary to: To comply
        with a legal obligation To protect and defend the rights or property of
        Gamifly To prevent or investigate possible wrongdoing in connection with
        the Service To protect the personal safety of users of the Service or
        the public To protect against legal liability SECURITY OF DATA The
        security of your data is important to us, but no method of transmission
        over the Internet, or method of electronic storage is 100% secure. While
        we strive to use commercially acceptable means to protect your Personal
        Data, we cannot guarantee its absolute security. SERVICE PROVIDERS We
        may employ third party companies and individuals to facilitate our
        Service ("Service Providers"), to provide the Service on our behalf, to
        perform Service-related services or to assist us in analyzing how our
        Service is used. These third parties have access to your Personal Data
        only to perform these tasks on our behalf and are obligated not to
        disclose or use it for any other purpose. Age PRIVACY Our Service does
        not address anyone under the age of 18. We do not knowingly collect
        personally identifiable information from anyone under the age of 18. If
        you are a parent or guardian and you are aware that your Children have
        provided us with Personal Data, please contact us. If we become aware
        that we have collected Personal Data from children without verification
        of parental consent, we take steps to remove that information from our
        servers. CHANGES TO THIS PRIVACY POLICY We may update our Privacy Policy
        from time to time. We will notify you of any changes by posting the new
        Privacy Policy on this page. We will let you know via email and/or a
        prominent notice on our Service, prior to the change becoming effective.
        You are advised to review this Privacy Policy periodically for any
        changes. Changes to this Privacy Policy are effective when they are
        posted on this page.
      </Text>
    </Flex>
  );
}

export default React.memo(Index);
