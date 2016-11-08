# Install Arch Linux on ASUS m81c Pad

## References

I guess the hardware structure of ASUS m81c and x205ta may be similar, so [this article](https://wiki.archlinux.org/index.php/Asus_x205ta) helps me a lot! Great thanks to the author!

Although I have no success installing Ubuntu on my pad (it freezes while installing the system), [this article](https://github.com/lopaka/instructions/blob/master/ubuntu-16.04-install-asus-x205ta.md) helped me to figure out how to create a Arch Linux USB stick.

While installing the Arch Linux, I've basically followed the instructions in the [Installation Guide](https://wiki.archlinux.org/index.php/Installation_guide) on Arch Linux Wiki.

## Prepare the Installation Media

(The instructions to create Arch Linux USB drive is missing...)

After the Arch Linux USB drive is prepared, connect it to the device and boot it up.

## Setup the Internet Connection

Install the driver program for network adapter:

  ```console
# cp /sys/firmware/efi/efivars/nvram-74b00bd9-805a-4d61-b51f-43268123d113 /lib/firmware/brcm/brcmfmac43340-sdio.txt

# rmmod brcmfmac
# modprobe brcmfmac
  ```

Create a wifi description file `wpa_supplicant.conf`, and write following text into it:

  ```text
network={
    ssid="whatever-it-is"
    psk="no_password"
}
  ```

And connect to Internet:

  ```console
# ip link set dev wlan0 up
// Maybe kill running wpa_supplicant here...
# wpa_supplicant -B -i wlan0 -c /etc/wpa_supplicant/wpa_supplicant.conf
# dhcpcd wlan0
  ```

Set the local time from network time provider:

  ```console
# timedatectl set-ntp true
  ```

## Prepare the Hard Drive

To partition and format the Hard Drive, follow the instructions below:

  ```console
# fdisk -l
# mkfs.fat -F32 /dev/mmcblk0p1
# mkfs.ext4 /dev/mmcblk0p2
# mkswap /dev/mmcblk0p3
# swapon /dev/mmcblk0p3

# mount /dev/mmcblk0p2 /mnt
# mkdir /mnt/boot
# mount /dev/mmcblk0p1 /mnt/boot
  ```

## Install the Base System

To install the base system:

  ```console
# pacstrap /mnt base
  ```

After that, we need to generate the file system table:

  ```console
# genfstab -U /mnt >> /mnt/etc/fstab
  ```

Check if the UUID is correct here! And maybe write the correct UUIDs to somewhere else, since the generated `fstab` file could be automatically modified for some unknown reason later.

Change the root folder to new partition:

  ```console
# arch-chroot /mnt
  ```

## Set the Time Zone and Locale

Set time zone:

  ```console
# ln -s /usr/share/zoneinfo/Europe/Berlin /etc/localtime
# hwclock --systohc --utc
  ```

Set locale:

  ```console
# nano /etc/locale.gen
# locale-gen
# echo LANG=en_US.UTF-8 > /etc/locale.conf
  ```

## Set Hostname and Password

Set hostname (change `arch-pad` below to the real hostname):

  ```console
# echo arch-pad > /etc/hostname
  ```

Set root password:

  ```console
# passwd
  ```

## Create GRUB Configuration File

Firstly download the package, and make the configuration file:

  ```console
# pacman -S grub efibootmgr
# grub-install --target=i386-efi --efi-directory=/boot --bootloader-id=GRUB

# pacman -S intel-ucode
# grub-mkconfig -o /boot/grub/grub.cfg
# grep intel-ucode.img /boot/grub/grub.cfg
  ```

## Install Driver for Network Adapter

Never forget this, this is for new system!!

  ```console
# pacman -S iw wpa_supplicant dialog linux-firmware
  ```

## Exit from New System and Reboot

Installation is finished, exit, umount eveything, reboot and enjoy:

  ```console
# exit
# umount -R /mnt
# reboot
  ```
