import { packageItem } from '@/types/packageItemType';

interface PackageDetailsSectionProps {
  packageItem: packageItem;
}

const PackageDetailsSection: React.FC<PackageDetailsSectionProps> = ({
  packageItem,
}) => {
  return (
    <section className='wrapper section-padding'>{packageItem.title}</section>
  );
};

export default PackageDetailsSection;
